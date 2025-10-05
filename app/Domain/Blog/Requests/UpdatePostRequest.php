<?php

namespace App\Domain\Blog\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user() && $this->user()->can('update', $this->route('post'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $postId = $this->route('post')->id;
        
        return [
            'title' => ['required', 'string', 'min:5', 'max:200'],
            'slug' => ['nullable', 'string', 'max:220', Rule::unique('posts', 'slug')->ignore($postId)],
            'abstract' => ['required', 'string', 'min:50', 'max:3000'],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,webp', 'max:2048', 'dimensions:min_width=800,min_height=600'],
            'external_url' => ['nullable', 'url', 'max:512'],
            'status' => ['required', 'in:draft,published'],
            'published_at' => ['nullable', 'date'],
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Judul artikel wajib diisi.',
            'title.min' => 'Judul artikel minimal 5 karakter.',
            'title.max' => 'Judul artikel maksimal 200 karakter.',
            'abstract.required' => 'Abstrak artikel wajib diisi.',
            'abstract.min' => 'Abstrak artikel minimal 50 karakter.',
            'abstract.max' => 'Abstrak artikel maksimal 3000 karakter.',
            'image.image' => 'File harus berupa gambar.',
            'image.mimes' => 'Gambar harus berformat JPEG, PNG, atau WebP.',
            'image.max' => 'Ukuran gambar maksimal 2MB.',
            'image.dimensions' => 'Gambar minimal berukuran 800x600 pixel.',
            'external_url.url' => 'URL eksternal harus valid.',
            'status.required' => 'Status artikel wajib dipilih.',
            'status.in' => 'Status harus draft atau published.',
            'published_at.date' => 'Tanggal publish harus valid.',
        ];
    }

    /**
     * Configure the validator instance.
     */
    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if ($this->status === 'published' && empty($this->external_url)) {
                $validator->errors()->add('external_url', 'URL eksternal wajib diisi jika status published.');
            }
        });
    }
}



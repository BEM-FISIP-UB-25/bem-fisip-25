import { Head, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdminPostsEdit = ({ post }) => {
    const [imagePreview, setImagePreview] = useState(post.image_url);
    
    const { data, setData, put, processing, errors, reset } = useForm({
        title: post.title,
        slug: post.slug,
        abstract: post.abstract,
        image: null,
        external_url: post.external_url || '',
        status: post.status,
        published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/posts/${post.id}`, {
            forceFormData: true,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const generateSlug = () => {
        const slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
        setData('slug', slug);
    };

    return (
        <>
            <Head title={`Edit: ${post.title}`} />
            
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Edit Artikel</h1>
                        <p className="mt-2 text-gray-600">Edit artikel: {post.title}</p>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Informasi Artikel</h2>
                            
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Judul Artikel *
                                </label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Masukkan judul artikel..."
                                />
                                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Slug URL
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={data.slug}
                                        onChange={(e) => setData('slug', e.target.value)}
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        placeholder="slug-otomatis-dari-judul"
                                    />
                                    <button
                                        type="button"
                                        onClick={generateSlug}
                                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                                    >
                                        Generate
                                    </button>
                                </div>
                                {errors.slug && <p className="mt-1 text-sm text-red-600">{errors.slug}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Abstrak *
                                </label>
                                <textarea
                                    value={data.abstract}
                                    onChange={(e) => setData('abstract', e.target.value)}
                                    rows={6}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="Masukkan abstrak artikel (minimal 50 karakter)..."
                                />
                                <p className="mt-1 text-sm text-gray-500">
                                    {data.abstract.length}/3000 karakter
                                </p>
                                {errors.abstract && <p className="mt-1 text-sm text-red-600">{errors.abstract}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gambar Artikel
                                </label>
                                <div className="space-y-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                                    />
                                    {imagePreview && (
                                        <div className="mt-4">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="h-48 w-full object-cover rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    Format: JPEG, PNG, WebP. Maksimal 2MB. Minimal 800x600px. Kosongkan jika tidak ingin mengubah gambar.
                                </p>
                                {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    URL Eksternal (GDrive)
                                </label>
                                <input
                                    type="url"
                                    value={data.external_url}
                                    onChange={(e) => setData('external_url', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    placeholder="https://drive.google.com/..."
                                />
                                {errors.external_url && <p className="mt-1 text-sm text-red-600">{errors.external_url}</p>}
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Status
                                </label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                                {errors.status && <p className="mt-1 text-sm text-red-600">{errors.status}</p>}
                            </div>

                            {data.status === 'published' && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tanggal Publish
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={data.published_at}
                                        onChange={(e) => setData('published_at', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.published_at && <p className="mt-1 text-sm text-red-600">{errors.published_at}</p>}
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end space-x-4">
                            <a
                                href="/admin/posts"
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                Batal
                            </a>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50 transition-colors"
                            >
                                {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </>
    );
};

export default AdminPostsEdit;

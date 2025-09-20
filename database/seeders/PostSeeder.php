<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                'title' => 'The Influence of World Trade Organization Policy On United State And China Trade Frictions, And The Impact On The Global Economy: In Term Of Electric Cars',
                'slug' => 'wto-policy-us-china-trade-frictions-electric-cars',
                'abstract' => 'This research discusses World Trade Organization (WTO) policies and their impact on trade  friction between the United States (US) and China, focusing on the electric vehicle industry  as a case study. The study aims to explain how WTO policies, such as the  Non-Discriminatory principle (Most Favored Nation - MFN), the Dispute Settlement  Understanding (DSU), and the Agreement on Subsidies and Anti-Dumping Measures,  influence the trade relations between these two countries. Specifically, the research concludes  that the US selective tariff policies, which violate the MFN principle, have exacerbated  tensions with China. The DSU mechanism, though designed to resolve trade disputes, has  proven ineffective in handling such complex conflicts, deepening dissatisfaction in both  nations. Additionally, allegations of illegal subsidies and dumping practices by the US against  China and the response in the form of anti-dumping tariffs have intensified the conflict.  China investment policies, which are seen as detrimental to foreign companies, have also  deepened distrust and triggered retaliation in the form of investment restrictions. In this  context, the study offers strategies for countries to address and mitigate the negative impacts  of international trade disputes based on WTO principles. Thus, this research will significantly  contribute to our understanding of the complexities of international trade and explore ways to  enhance fairness and efficiency in global trade.',
                'image_path' => 'posts/ub.png',
                'external_url' => 'https://drive.google.com/file/d/1Yd2_DtXoo31Bwj1ekUQKWvk8eACsPubx/view?usp=sharing ',
                'status' => 'published',
                'published_at' => now()->subDays(5),
            ],
            [
                'title' => 'Digital Transformation in Higher Education: Challenges and Opportunities for Indonesian Universities',
                'slug' => 'digital-transformation-higher-education-indonesia',
                'abstract' => 'The rapid advancement of digital technology has fundamentally transformed the landscape of higher education globally. This article explores the specific challenges and opportunities that Indonesian universities face in implementing digital transformation initiatives, including infrastructure development, faculty training, and student engagement strategies.',
                'image_path' => 'posts/ub.png',
                'external_url' => 'https://drive.google.com/file/d/1example2/view',
                'status' => 'published',
                'published_at' => now()->subDays(3),
            ],
            [
                'title' => 'Sustainable Development Goals and Student Leadership: A Case Study of BEM FISIP UB',
                'slug' => 'sdg-student-leadership-bem-fisip-ub',
                'abstract' => 'This research discusses World Trade Organization (WTO) policies and their impact on trade  friction between the United States (US) and China, focusing on the electric vehicle industry  as a case study. The study aims to explain how WTO policies, such as the  Non-Discriminatory principle (Most Favored Nation - MFN), the Dispute Settlement  Understanding (DSU), and the Agreement on Subsidies and Anti-Dumping Measures,  influence the trade relations between these two countries. Specifically, the research concludes  that the US selective tariff policies, which violate the MFN principle, have exacerbated  tensions with China. The DSU mechanism, though designed to resolve trade disputes, has  proven ineffective in handling such complex conflicts, deepening dissatisfaction in both  nations. Additionally, allegations of illegal subsidies and dumping practices by the US against  China and the response in the form of anti-dumping tariffs have intensified the conflict.  China investment policies, which are seen as detrimental to foreign companies, have also  deepened distrust and triggered retaliation in the form of investment restrictions. In this  context, the study offers strategies for countries to address and mitigate the negative impacts  of international trade disputes based on WTO principles. Thus, this research will significantly  contribute to our understanding of the complexities of international trade and explore ways to  enhance fairness and efficiency in global trade.',
                'image_path' => 'posts/ub.png',
                'external_url' => 'https://drive.google.com/file/d/1example3/view',
                'status' => 'published',
                'published_at' => now()->subDays(1),
            ],
            [
                'title' => 'The Role of Social Media in Political Participation Among University Students',
                'slug' => 'social-media-political-participation-university-students',
                'abstract' => 'Social media platforms have become crucial tools for political engagement among young people, particularly university students. This study investigates how different social media platforms influence political participation, civic engagement, and democratic processes within university communities.',
                'image_path' => 'posts/ub.png',
                'external_url' => 'https://drive.google.com/file/d/1example4/view',
                'status' => 'draft',
                'published_at' => null,
            ],
        ];

        foreach ($posts as $postData) {
            // Check if post with this slug already exists
            if (!Post::where('slug', $postData['slug'])->exists()) {
                Post::create($postData);
            }
        }
    }
}

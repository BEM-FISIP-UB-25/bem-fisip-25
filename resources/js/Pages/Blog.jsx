import BlogIndexPage from "@/features/blog/BlogIndexPage";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const Blog = ({ posts, searchQuery, meta }) => {
    return (
        <BaseLayout title={meta?.title || "Artikel"}>
            <BlogIndexPage 
                posts={posts} 
                searchQuery={searchQuery} 
                meta={meta}
            />
        </BaseLayout>
    );
};

export default Blog;

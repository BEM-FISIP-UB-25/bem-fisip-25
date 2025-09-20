import BlogDetailPage from "@/features/blog/BlogDetailPage";
import BaseLayout from "@/shared/Layouts/HomeLayout";

const PostShow = ({ post, meta }) => {
    return (
        <BaseLayout title={meta?.title || post?.title}>
            <BlogDetailPage post={post} meta={meta} />
        </BaseLayout>
    );
};

export default PostShow;


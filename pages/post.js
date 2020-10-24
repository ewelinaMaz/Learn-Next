import { withRouter } from "next/router";

const Post = withRouter((props) => {
return <h1>You are looking at post {props.router.query.id}</h1>;
});
//Post.getInitialProps = async ({query}) => {
//return query;
//}
export default Post;

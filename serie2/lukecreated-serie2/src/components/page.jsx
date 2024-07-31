import PropTypes from "prop-types";

function Page({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Page;

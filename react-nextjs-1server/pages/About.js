export default function About({ message }) {
  return (
    <div>
      <div>
        <h1>SSR About Page</h1>
        <p>message: {message}</p>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { message: "Welcome to the About Page" },
  };
}

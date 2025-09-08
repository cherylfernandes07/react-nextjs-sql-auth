// pages/index.jsx (for Pages Router)context: any
export async function getServerSideProps() {
  // const x = context;
  // You can fetch data here, e.g., from an API or database
  const data = { message: 'Data fetched on the server!',
  };

  return {
    props: {
      serverData: data.message,
    },
  };
}

export default function SimpleSSRComponent() {
  const currentDate = new Date().toUTCString();
  const greeting = 'Hello from SSR!';

  return (
    <div>
      <h1>{greeting}</h1>
      <p>This content is rendered on the server.</p>
      <p>
        Current Server Time:
        {currentDate}
      </p>
    </div>
  );
}

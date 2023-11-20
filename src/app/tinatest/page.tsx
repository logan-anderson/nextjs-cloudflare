import client from "../../../tina/__generated__/client";

export default async function TinaTestPage() {
  const data = await client.queries.postConnection();
  const str = JSON.stringify(data?.data, null, 2);

  return (
    <div>
      <pre>{str}</pre>
    </div>
  );
}

export const runtime = "edge";

export const revalidate = 0;

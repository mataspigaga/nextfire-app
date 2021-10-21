import toast from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <div>
        <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
      </div>
    </main>
  );
}

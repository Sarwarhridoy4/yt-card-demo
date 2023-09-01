import YtCard from "./components/YtCard/YtCard";

const App = () => {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start bg-white dark:bg-slate-900">
      <YtCard />
      <YtCard />
      <YtCard />
      <YtCard />
      <YtCard />
      <YtCard />
    </div>
  );
};

export default App;

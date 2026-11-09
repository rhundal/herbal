export default function Homepage() {
  return (
    <div className="bg-background">
      <header className="flex flex-col md:flex-row space-between">
        <div className="flex justify-start">
          <h1 className="font-xl font-heading text-primary font-bold">
            Herbelle
          </h1>
        </div>
        <div className="flex justify-end text-md text-primary">
          <div className="flex flex-row">
            <div>Browse</div>
            <div>Favorites(3)</div>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
}

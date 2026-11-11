export default function CommonNavBar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-start mb-5 md:mb-0">
        <h1 className="text-3xl font-heading text-primary font-bold">Herbal</h1>
      </div>
      <div className="flex justify-end text-md text-primary">
        <div className="flex flex-row gap-10 font-bold">
          <div>Browse</div>
          <div>Favorites(3)</div>
        </div>
      </div>
    </header>
  );
}

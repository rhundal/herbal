// Links to respective category page
// navigate to category page

export default function Homepage() {
  return (
    <div className="bg-background flex flex-col m-15">
      <header className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-start mb-5 md:mb-0">
          <h1 className="text-3xl font-heading text-primary font-bold">
            Herbelle
          </h1>
        </div>
        <div className="flex justify-end text-md text-primary">
          <div className="flex flex-row gap-10 font-bold">
            <div>Browse</div>
            <div>Favorites(3)</div>
          </div>
        </div>
      </header>
      <hr className="mt-10 border-2 border-border" />
      <main>
        <div className="flex flex-col gap-3 text-center mt-5">
          <div>
            <h2 className="text-5xl font-heading text-primary font-bold">
              Plant-based recipes
            </h2>
          </div>
          <div>
            <h3 className="text-md font-body text-ink-muted">
              Choose a kitchen, search its recipes, and save the ones you want
              to cook again.
            </h3>
          </div>
        </div>
        <article className="flex justify-center mt-15">
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="rounded-xl shadow-2xl flex flex-col bg-surface">
              <div className="bg-photo-1 text-center px-35 py-15 rounded-t-xl">
                Vegan Kitchen
              </div>
              <div className="flex flex-col bg-surface">
                <h1 className="m-5 text-lg font-extrabold">Vegan Kitchen</h1>
                <div className="ml-5">No meat or seafood</div>
                <div className="ml-5">No dairy</div>
                <div className="ml-5">No eggs</div>
                <div className="ml-5">No honey</div>
              </div>
              <div className="m-5">
                <button className="px-5 py-2 bg-primary text-surface rounded-lg">
                  Explore Vegan Kitchen
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-lg flex flex-col bg-surface">
              {" "}
              <div className="bg-photo-2 text-center px-30 py-15 rounded-t-xl">
                {" "}
                Vegetarian Kitchen
              </div>
              <div className="flex flex-col bg-surface">
                <h1 className="m-5 text-lg font-extrabold">
                  Vegetarian Kitchen
                </h1>
                <div className="ml-5">No meat or seafood</div>
                <div className="ml-5">Dairy permitted</div>
                <div className="ml-5">Eggs permitted</div>
                <div className="ml-5">Honey permitted</div>
              </div>
              <div className="m-5">
                <button className="px-5 py-2 text-primary border-1 rounded-lg border-border">
                  Explore Vegetarian Kitchen
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

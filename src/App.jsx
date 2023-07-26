import Counter from "./components/Counter";
import { Facebook } from "./assets/Facebook";
import { Pinterest } from "./assets/Pinterest";
import { Instagram } from "./assets/Instagram";

function App() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-evenly gap-8 bg-stars'>
      <section className='flex flex-col items-center justify-center gap-9 px-4'>
        <h1 className='font-redHat font-bold uppercase text-white text-2xl lg:text-5xl tracking-widest text-center'>{`we're launching soon`}</h1>
        <Counter targetDate={24} />
      </section>
      <footer className='flex flex-row gap-4 items-center justify-center'>
        <Facebook />
        <Pinterest />
        <Instagram />
      </footer>
    </main>
  );
}

export default App;

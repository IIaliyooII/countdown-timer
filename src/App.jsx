import Counter from "./components/Counter";
import { Facebook } from "./assets/Facebook";
import { Pinterest } from "./assets/Pinterest";
import { Instagram } from "./assets/Instagram";
import { useState } from "react";

function App() {
  const [date, setDate] = useState("");
  const [isValid, setIsValid] = useState(true);

  return (
    <main className='min-h-screen flex flex-col items-center justify-evenly gap-8 bg-stars'>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <input
          type='datetime-local'
          name='date'
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
          className='px-8 py-3 border-none outline-none rounded-md bg-dark-desaturated-blue text-soft-red font-redHat text-xl'
        />
        {!isValid && (
          <span className='font-redHat text-soft-red/60 text-lg'>The date is smaller than the current date</span>
        )}
      </div>
      <section className='flex flex-col items-center justify-center gap-9 px-4'>
        <h1 className='font-redHat font-bold uppercase text-white text-2xl lg:text-5xl tracking-widest text-center'>{`we're launching soon`}</h1>
        <Counter onDate={date} onIsValid={setIsValid} />
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

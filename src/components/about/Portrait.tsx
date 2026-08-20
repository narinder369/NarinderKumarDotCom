export function Portrait() {
  return (
    <div className="relative flex aspect-[4/5] items-end overflow-hidden rounded-3xl border border-brand-border bg-brand-cream p-8">
      <div className="absolute right-8 top-10 size-40 rounded-full bg-brand-sky/40" aria-hidden />
      <div className="absolute left-10 top-24 size-24 rounded-full bg-brand-pink/20" aria-hidden />
      <div className="absolute inset-x-10 top-16 mx-auto h-64 max-w-[220px] rounded-t-[8rem] bg-white/70" aria-hidden />
      <div>
        <p className="relative font-serif text-3xl text-brand-brown">Narinder Kumar</p>
        <p className="relative mt-2 max-w-[16rem] text-sm text-brand-muted">
          Add a professional portrait at{" "}
          <code className="text-brand-body">/public/images/narinder-kumar.jpg</code> to
          replace this placeholder.
        </p>
      </div>
    </div>
  );
}

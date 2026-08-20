export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div
        className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-sky/35 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />
      <div className="relative">
        <div className="rounded-[1.4rem] border border-[#d5dbe3] bg-[#1f2933] p-2.5 shadow-card">
          <div className="mb-2 flex items-center justify-center">
            <span className="h-1.5 w-16 rounded-full bg-[#4b5563]" />
          </div>
          <div className="overflow-hidden rounded-xl bg-white">
            <ClinicSitePreview compact />
          </div>
        </div>
        <div className="absolute -bottom-8 right-3 w-[38%] max-w-[150px] rounded-[1.4rem] border-[6px] border-[#1f2933] bg-white shadow-card sm:right-0">
          <div className="mx-auto mt-1.5 h-1.5 w-10 rounded-full bg-[#1f2933]" />
          <div className="overflow-hidden p-2 pb-3">
            <ClinicSitePreview mobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrowserMockup() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
        <div className="flex items-center gap-2 border-b border-brand-border bg-[#F8FAFC] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#FECACA]" />
          <span className="size-2.5 rounded-full bg-[#FDE68A]" />
          <span className="size-2.5 rounded-full bg-[#BBF7D0]" />
          <div className="ml-3 h-6 flex-1 rounded-md bg-white text-[11px] leading-6 text-brand-muted ring-1 ring-brand-border">
            <span className="px-3">careplusclinic.com</span>
          </div>
        </div>
        <ClinicSitePreview />
      </div>
      <div className="absolute -right-4 top-24 hidden w-44 rounded-2xl border border-brand-border bg-white p-3 shadow-card sm:block">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-brand-sky/40" />
          <div>
            <p className="text-xs font-semibold text-brand-brown">Dr. Meera Shah</p>
            <p className="text-[11px] text-brand-muted">General Physician</p>
          </div>
        </div>
      </div>
      <div className="absolute -left-3 bottom-16 hidden w-40 rounded-2xl border border-brand-border bg-white p-3 shadow-card sm:block">
        <p className="text-[11px] font-medium text-brand-pink">Next available</p>
        <p className="text-sm font-semibold text-brand-brown">Today, 4:30 pm</p>
      </div>
    </div>
  );
}

function ClinicSitePreview({
  compact = false,
  mobile = false,
}: {
  compact?: boolean;
  mobile?: boolean;
}) {
  return (
    <div className={mobile ? "space-y-2" : "space-y-3"}>
      <div className="flex items-center justify-between px-3 pt-3">
        <span className={`font-serif text-brand-brown ${mobile ? "text-xs" : "text-sm"}`}>
          CarePlus
        </span>
        {!mobile ? (
          <span className="rounded-full bg-brand-pink px-2.5 py-1 text-[10px] text-white">
            Book Visit
          </span>
        ) : null}
      </div>
      <div className={`${mobile ? "px-2" : "px-3"}`}>
        <div
          className={`rounded-xl bg-brand-cream ${compact || mobile ? "p-3" : "p-5"}`}
        >
          <p className={`font-serif text-brand-brown ${mobile ? "text-xs" : "text-lg"}`}>
            Compassionate care, closer to you
          </p>
          {!mobile ? (
            <p className="mt-1 text-[11px] text-brand-muted">
              Consultations, diagnostics and follow-up support.
            </p>
          ) : null}
        </div>
      </div>
      <div className={`grid ${mobile ? "grid-cols-1 gap-1.5 px-2 pb-2" : "grid-cols-3 gap-2 px-3 pb-3"}`}>
        {["Consult", "Lab tests", "Follow-up"].map((item) => (
          <div
            key={item}
            className="rounded-lg border border-brand-border bg-white px-2 py-2 text-[10px] text-brand-muted"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

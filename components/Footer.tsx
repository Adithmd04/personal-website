import { ArrowUpRight, ArrowUp, Code2 } from "lucide-react";
import { data } from "@/assets/personalDetails";

const container =
  "mx-auto w-[min(100%_-_56px,1160px)] max-md:w-[min(100%_-_38px,1160px)]";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-surface pt-8.75 pb-5.5">
      <div
        className={`${container} flex items-center justify-between gap-6 pb-8.25 max-md:flex-wrap max-md:items-start`}
      >
        <a
          href="#home"
          className="grid grid-cols-[38px_auto] items-center gap-x-2.5 text-[.8rem] font-[750] tracking-[.06em] text-ink"
        >
          <span className="row-span-2 grid size-9 place-items-center rounded-[9px] bg-accent text-on-accent">
            <Code2 size={19} />
          </span>
          {data.name.firstName} {data.name.lastName}
          <small className="block font-mono text-[.52rem] font-semibold tracking-widest text-subtle">
            BUILDING FOR THE WEB
          </small>
        </a>
        <p className="text-[.74rem] leading-[1.7] text-subtle max-md:order-3 max-md:w-full">
          Designed with intent.
          <br />
          Built with curiosity.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 font-mono text-[.6rem] font-semibold tracking-widest text-body hover:text-accent max-md:ml-auto"
        >
          BACK TO TOP <ArrowUp size={15} />
        </a>
      </div>
      <div
        className={`${container} flex justify-between gap-5 border-t border-line pt-4.25 font-mono text-[.55rem] font-semibold tracking-[.09em] text-subtle max-md:flex-col max-md:leading-[1.6]`}
      >
        <span>
          © {year} {data.name.firstName} {data.name.lastName}. ALL RIGHTS
          RESERVED.
        </span>
        <a
          href={`mailto:${data.name.email}`}
          className="inline-flex items-center gap-1.25 text-subtle hover:text-accent"
        >
          SAY HELLO <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

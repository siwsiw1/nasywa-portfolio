import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function LiveClock() {
  const [mounted, setMounted] = useState(false);
  const [timeState, setTimeState] = useState<{
    day: string;
    date: string;
    time: string;
    tz: string;
  }>({
    day: "LOCAL TIME",
    date: "-- --- ----",
    time: "--:--:--",
    tz: "WIB · WEST JAVA, INDONESIA",
  });

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Format for Asia/Jakarta timezone (WIB)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat("en-US", options);
      const parts = formatter.formatToParts(now);

      let weekday = "";
      let day = "";
      let month = "";
      let year = "";
      let hour = "00";
      let minute = "00";
      let second = "00";

      for (const p of parts) {
        if (p.type === "weekday") weekday = p.value.toUpperCase();
        if (p.type === "day") day = p.value;
        if (p.type === "month") month = p.value.toUpperCase();
        if (p.type === "year") year = p.value;
        if (p.type === "hour") hour = p.value;
        if (p.type === "minute") minute = p.value;
        if (p.type === "second") second = p.value;
      }

      setTimeState({
        day: weekday || "SATURDAY",
        date: `${day} ${month} ${year}`,
        time: `${hour}:${minute}:${second}`,
        tz: "WIB · WEST JAVA, INDONESIA",
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative inline-flex items-center gap-4 rounded-xl border border-[#8CC0EB]/40 bg-[#FEF9F2]/80 dark:bg-[#172331]/80 px-4 py-2.5 shadow-xs backdrop-blur-md transition-all hover:border-[#8CC0EB]/70">
      <div className="flex items-center gap-2 border-r border-[#8CC0EB]/30 pr-3.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8CC0EB] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8CC0EB]" />
        </span>
        <Clock className="h-3.5 w-3.5 text-[#8CC0EB]" />
        <div className="flex flex-col">
          <span className="font-mono text-[0.58rem] font-bold tracking-[0.22em] text-[#64748B] dark:text-[#94A3B8]">
            LOCAL TIME
          </span>
          <span className="font-mono text-[0.65rem] font-bold tracking-[0.16em] text-foreground">
            {mounted ? timeState.day : "WIB TIME"}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-sm font-bold tracking-wider text-foreground">
            {mounted ? timeState.time : "--:--:--"}
          </span>
          <span className="font-mono text-[0.6rem] font-medium tracking-widest text-[#8CC0EB]">
            {mounted ? timeState.date : "ASIA/JAKARTA"}
          </span>
        </div>
        <span className="font-mono text-[0.56rem] tracking-[0.18em] text-[#64748B] dark:text-[#94A3B8]">
          {timeState.tz}
        </span>
      </div>
    </div>
  );
}

export function formatTime(hours: number): string {
    const hoursPart = Math.floor(hours);
    const minutesPart = Math.round((hours - hoursPart) * 60);
  
    return `${hoursPart}h ${minutesPart !== 0? minutesPart + 'm': ''}`;
  }
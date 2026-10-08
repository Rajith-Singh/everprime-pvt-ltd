import {
  Users, Briefcase, Headphones, Package, Hotel, GraduationCap, CalendarCheck, Sparkles,
  Megaphone, Speaker, Ticket, Lightbulb, Building2, Store, Factory, Search, ClipboardCheck,
  Rocket, Award, ShieldCheck, Target, Handshake, Circle,
} from 'lucide-react'

const MAP = {
  Users, Briefcase, Headphones, Package, Hotel, GraduationCap, CalendarCheck, Sparkles,
  Megaphone, Speaker, Ticket, Lightbulb, Building2, Store, Factory, Search, ClipboardCheck,
  Rocket, Award, ShieldCheck, Target, Handshake,
}

export function Icon({ name, size = 24, ...rest }) {
  const C = MAP[name] || Circle
  return <C size={size} strokeWidth={1.6} {...rest} />
}

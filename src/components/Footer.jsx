export default function Footer() {

    return <footer className="bg-stone-900 text-white py-4 text-center">
    <p className="text-sm md:text-base flex items-center justify-center gap-2">
      <span>&copy; {new Date().getFullYear()} Light Ads - Neon</span>
      <span>All rights reserved.</span>
    </p>
  </footer>
}
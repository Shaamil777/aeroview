export default function Footer() {
  return (
    <footer className="bg-navy text-cream py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-aviation">AeroView</span>
          <p className="text-sm text-text-secondary mt-2">© {new Date().getFullYear()} AeroView. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-teal transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

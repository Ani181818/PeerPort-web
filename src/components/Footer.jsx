const Footer = ()=> {
    return (
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
                PeerPort ⚡
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Connecting developers worldwide. Build your network, grow your career, and find your tech community.
              </p>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">How it Works</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Features</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Success Stories</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-blue-300 mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
    )
}

          {/* Bottom Section */}
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 PeerPort. All rights reserved. Built with ❤️ for developers.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Terms</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;
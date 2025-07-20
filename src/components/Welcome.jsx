import { Link } from "react-router-dom";
import { Users, MessageCircle, Shield, Zap, Code, Heart } from "lucide-react";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Welcome to PeerPort
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow developers, build meaningful relationships, and grow your professional network in the tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Join Now - It's Free!
                </button>
              </Link>
              <p className="text-slate-400 text-sm">
                Already have an account? 
                <Link to="/login" className="text-blue-400 hover:text-blue-300 ml-1 font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Why Choose PeerPort?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover the perfect platform to connect with like-minded developers and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Matching</h3>
              <p className="text-slate-300 leading-relaxed">
                Our intelligent algorithm connects you with developers who share your interests, skills, and career goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Chat</h3>
              <p className="text-slate-300 leading-relaxed">
                Engage in meaningful conversations with instant messaging and build lasting professional relationships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe & Secure</h3>
              <p className="text-slate-300 leading-relaxed">
                Your privacy and security are our top priorities. Connect with confidence in a trusted environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-slate-300 leading-relaxed">
                Experience seamless performance with our optimized platform built for speed and reliability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tech-Focused</h3>
              <p className="text-slate-300 leading-relaxed">
                Designed specifically for developers, by developers. Find your tribe in the tech community.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-pink-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Meaningful Connections</h3>
              <p className="text-slate-300 leading-relaxed">
                Build genuine relationships that go beyond just networking. Find mentors, collaborators, and friends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join thousands of developers who are already building their network on PeerPort. Your next great connection is just a click away.
          </p>
          <Link to="/login">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
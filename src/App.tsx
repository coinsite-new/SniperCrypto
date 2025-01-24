import React, { useState } from 'react';
import { X, Twitter, Zap, Ghost, Search, ChevronDown } from 'lucide-react';
import Changelog from './pages/Changelog';
import Icon from './components/Icon';

const features = [
  {
    icon: <Icon name="twitter" size={20} />,
    title: "Posts feed",
    description: "Real-time Twitter feed tracking influential crypto personalities and news sources. Our AI analyzes sentiment and identifies potential market-moving information."
  },
  {
    icon: <Ghost size={20} />,
    title: "New Pairs Detection",
    description: "Automated token opportunity detection system"
  },
  {
    icon: <Zap size={20} />,
    title: "SOL Sniper",
    description: "Advanced SOL Sniper with MEV protection"
  },
  {
    icon: <Search size={20} />,
    title: "SOL Search",
    description: "SOL Search tool with detailed holder analytics"
  }
];

const additionalFeatures = [
  "Wallet integration with multiple providers",
  "Real-time market data and price tracking",
  "Customizable slippage and gas settings",
  "Token burning mechanism for premium features",
  "Responsive and modern UI design",
  "Cross-chain compatibility preparation"
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'changelog':
        return <Changelog />;
      default:
        return (
          <div className="min-h-screen">
            {isModalOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
                <div className="card w-full max-w-lg">
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold">Contract Address</h2>
                      <span className="version-tag">Version 1.0</span>
                    </div>
                    <button 
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-4 space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className={`menu-item ${index === 0 ? 'active' : ''}`}>
                        {feature.icon}
                        <div className="content">
                          <div className="font-medium">{feature.title}</div>
                          {feature.description && (
                            <div className="description">{feature.description}</div>
                          )}
                        </div>
                        <ChevronDown size={20} className="text-gray-500" />
                      </div>
                    ))}

                    {additionalFeatures.map((feature, index) => (
                      <div key={`additional-${index}`} className="menu-item">
                        <div className="content">
                          <div className="font-medium">{feature}</div>
                        </div>
                        <ChevronDown size={20} className="text-gray-500" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <>
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-8 h-8 bg-purple rounded-lg flex items-center justify-center">
              <Zap size={20} />
            </div>
            <span className="font-semibold">Sniper Crypto</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className={`text-gray-300 hover:text-white ${currentPage === 'changelog' ? 'text-white' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('changelog');
              }}
            >
              Changelog
            </a>
            <a href="#" className="text-gray-300 hover:text-white">How it works</a>
            <a href="#" className="text-gray-300 hover:text-white">CA: Coming soon</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="btn btn-twitter">
              <Icon name="twitter" size={20} />
              Twitter
            </button>
            <button className="btn btn-phantom">
              <Icon name="ghost" size={18} />
              Phantom
            </button>
          </div>
        </div>
      </header>

      {renderContent()}
    </>
  );
}

export default App;
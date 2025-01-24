import React from 'react';
import { Zap, Twitter, Ghost, Search } from 'lucide-react';

const releases = [
  {
    version: "1.0",
    date: "March 2024",
    title: "Initial Release",
    features: [
      {
        icon: <Twitter size={20} />,
        title: "Live Twitter Feed Integration",
        description: "Real-time Twitter feed tracking influential crypto personalities and news sources with AI-powered sentiment analysis."
      },
      {
        icon: <Ghost size={20} />,
        title: "New Pairs Detection",
        description: "Automated system for detecting and analyzing new token pairs as they launch."
      },
      {
        icon: <Zap size={20} />,
        title: "SOL Sniper",
        description: "Advanced SOL sniping tool with built-in MEV protection mechanisms."
      },
      {
        icon: <Search size={20} />,
        title: "SOL Search",
        description: "Comprehensive search tool with detailed holder analytics and market insights."
      }
    ],
    improvements: [
      "Wallet integration supporting multiple providers",
      "Real-time market data tracking system",
      "Customizable trading parameters",
      "Premium features access through token burning",
      "Modern and responsive interface design",
      "Cross-chain compatibility foundations"
    ]
  }
];

function Changelog() {
  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-3xl font-bold">Changelog</h1>
          <div className="h-8 w-px bg-white/10"></div>
          <p className="text-gray-400">Latest updates and improvements</p>
        </div>

        {releases.map((release, index) => (
          <div key={index} className="card mb-8">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold">Version {release.version}</h2>
                <span className="version-tag">{release.date}</span>
              </div>
              <h3 className="text-lg text-gray-400">{release.title}</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">New Features</h4>
                <div className="space-y-4">
                  {release.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                      <div className="mt-1 text-purple">{feature.icon}</div>
                      <div>
                        <h5 className="font-medium mb-1">{feature.title}</h5>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Improvements</h4>
                <div className="space-y-2">
                  {release.improvements.map((improvement, improvementIndex) => (
                    <div key={improvementIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple"></div>
                      <p className="text-gray-300">{improvement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Changelog;
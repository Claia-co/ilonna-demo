import { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Sparkles } from 'lucide-react';
import { demoLegalChat } from '../data/demoReports';

interface Reference {
  article: string;
  titre: string;
  type: string;
  url: string;
}

interface Message {
  type: 'user' | 'ai';
  text: string | {
    summary: string;
    references: Reference[];
  };
}

export default function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasLoadedInitialMessage, setHasLoadedInitialMessage] = useState(false);

  // Suggestions animées
  const suggestions = [
    demoLegalChat.question,
    "Puis-je signer un freelance sur une mission 5 jours par semaine pendant 6 mois ?",
    "Qu'est-ce que je risque si je n'arrive pas à respecter les points de parité en ayant 50 salariés ?"
  ];
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
        setFade(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🆕 Charger automatiquement la conversation de démo au montage
  useEffect(() => {
    if (!hasLoadedInitialMessage) {
      // Attendre 500ms puis afficher la question
      setTimeout(() => {
        setMessages([{ type: 'user', text: demoLegalChat.question }]);

        // Attendre 1s puis afficher la réponse avec animation
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              type: 'ai',
              text: {
                summary: demoLegalChat.answer,
                references: demoLegalChat.references,
              },
            },
          ]);
          setIsTyping(true);
          setDisplayedText('');
        }, 1000);
      }, 500);

      setHasLoadedInitialMessage(true);
    }
  }, [hasLoadedInitialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, displayedText]);

  // Typing animation effect
  useEffect(() => {
    if (isTyping && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === 'ai' && typeof lastMessage.text !== 'string') {
        const fullText = demoLegalChat.answer;
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
          if (currentIndex < fullText.length) {
            setDisplayedText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 8);

        return () => clearInterval(typingInterval);
      }
    }
  }, [isTyping, messages]);

  const handleSendMessage = () => {
    if (!inputText.trim() || isTyping) return;

    const userMessage = inputText.trim();
    setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
    setInputText('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          text: {
            summary: demoLegalChat.answer,
            references: demoLegalChat.references,
          },
        },
      ]);
      setIsTyping(true);
      setDisplayedText('');
    }, 500);
  };

  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex-1 flex flex-col overflow-auto max-w-4xl mx-auto w-full py-8">
        {messages.length === 0 && (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Discuter avec Ilonna
            </h1>
            <p className="text-gray-600 text-lg">
              Votre experte en droit du travail répond à toutes vos questions.
            </p>
          </div>
        )}

        <div className="flex-1 flex flex-col overflow-hidden">
          {messages.length === 0 ? (
            // Zone de départ (aucun message) - Encart compact et centré
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full max-w-3xl px-8">
                <div
                  className="relative p-[2px] rounded-2xl"
                  style={{
                    background: 'linear-gradient(180deg, #e79ef6, #9fffff, #ba68e6)',
                  }}
                >
                  <div
                    className="rounded-2xl p-5 relative"
                    style={{
                      background: '#ffffff',
                      border: '1px solid #FFFFFF66',
                    }}
                  >
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      className="w-full min-h-[80px] text-gray-700 text-base resize-none focus:outline-none bg-transparent relative z-10"
                    />

                    {inputText.trim() === '' && (
                      <div
                        className={`absolute top-6 left-6 right-6 text-[#6C7280] text-base pointer-events-none transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        {suggestions[currentSuggestion]}
                      </div>
                    )}

                    <div className="flex justify-end mt-3 relative z-20">
                      <button
                        onClick={handleSendMessage}
                        className="bg-[#7047E6] text-white p-3 rounded-xl hover:bg-[#5a35d4] transition-all shadow-lg"
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Historique */}
              <div className="flex-1 overflow-y-auto px-4 py-6">
                <div
                  className="rounded-3xl p-8 space-y-6"
                  style={{
                    background: 'rgba(247, 250, 255, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {messages.map((message, index) => (
                    <div key={index} className="space-y-3">
                      {/* Message Header */}
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: message.type === 'user' ? '#8B5CF6' : '#7047e6' }}
                        >
                          {message.type === 'user' ? (
                            <MessageCircle className="w-5 h-5 text-white" />
                          ) : (
                            <Sparkles className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <h3
                          className="text-lg font-semibold"
                          style={{ color: message.type === 'user' ? '#8B5CF6' : '#7047e6' }}
                        >
                          {message.type === 'user' ? 'Votre question' : 'Recommandations'}
                        </h3>
                      </div>

                      {/* Message Content */}
                      <div
                        className="text-base leading-relaxed whitespace-pre-wrap"
                        style={{ color: message.type === 'user' ? '#8B5CF6' : '#7047e6' }}
                      >
                        {typeof message.text === 'string' ? (
                          message.text
                        ) : message.type === 'ai' && isTyping && index === messages.length - 1 ? (
                          <>
                            {displayedText.split('\n').map((line, i) => (
                              <span key={i}>
                                {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                                {i < displayedText.split('\n').length - 1 && <br />}
                              </span>
                            ))}
                            <span className="animate-pulse">|</span>
                          </>
                        ) : (
                          (message.text as { summary: string; references: Reference[] }).summary.split('\n').map((line, i, arr) => (
                            <span key={i}>
                              {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                              {i < arr.length - 1 && <br />}
                            </span>
                          ))
                        )}
                      </div>

                      {/* References (only for AI when done typing) */}
                      {message.type === 'ai' &&
                        typeof message.text !== 'string' &&
                        (!isTyping || index !== messages.length - 1) &&
                        message.text.references?.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <span>📚</span> Sources juridiques
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {message.text.references.map((ref, i) => (
                                <a
                                  key={i}
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium transition-colors"
                                  title={ref.titre}
                                >
                                  📜 {ref.article}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input en bas quand il y a des messages */}
                <div className="mt-6">
                  <div
                    className="relative p-[2px] rounded-2xl"
                    style={{
                      background: 'linear-gradient(180deg, #e79ef6, #9fffff, #ba68e6)',
                    }}
                  >
                    <div
                      className="rounded-2xl p-4 flex items-center gap-3"
                      style={{ background: '#ffffff' }}
                    >
                      <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSendMessage();
                          }
                        }}
                        placeholder="Posez une autre question..."
                        className="flex-1 text-gray-700 text-base focus:outline-none bg-transparent"
                        disabled={isTyping}
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={isTyping || !inputText.trim()}
                        className="bg-[#7047E6] text-white p-3 rounded-xl hover:bg-[#5a35d4] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

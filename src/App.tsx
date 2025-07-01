import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Shield, 
  Clock, 
  BarChart3,
  Target,
  Zap,
  Bell,
  Eye,
  MessageCircle,
  Mail,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqData = [
    {
      question: "Funciona em qual plataforma?",
      answer: "Apenas para MT4 (MetaTrader 4). O indicador foi desenvolvido especificamente para esta plataforma e não é compatível com MT5 ou outras plataformas."
    },
    {
      question: "É necessário conhecimento técnico?",
      answer: "Não, basta seguir os sinais no gráfico. O UTS exibe setas verdes para compra e vermelhas para venda diretamente no seu gráfico, tornando as decisões muito simples."
    },
    {
      question: "É possível instalar no celular?",
      answer: "Os sinais são exibidos no MT4, mas você pode receber alertas no celular através das notificações push do MetaTrader 4 mobile."
    },
    {
      question: "Tem suporte?",
      answer: "Sim! Oferecemos suporte por e-mail e vídeo tutorial completo de instalação incluído na compra."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-lime-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-lime-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-lime-400 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Receba Sinais de <span className="text-lime-400">Compra e Venda</span> com Alta Precisão Direto no Seu Gráfico!
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Descubra o indicador mais confiável para identificar reversões e seguir tendências no MT4 – mesmo que você seja iniciante.
                </p>
              </div>
              
              <button className="group bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Quero Receber os Sinais Agora
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lime-400 font-semibold">EURUSD M15</span>
                    <span className="text-gray-400 text-sm">Ultimate Trend Signals</span>
                  </div>
                  <div className="h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative">
                        <div className="absolute top-16 left-12 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <TrendingUp className="w-3 h-3 text-gray-900" />
                        </div>
                        <div className="absolute top-32 right-16 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-500">
                          <TrendingUp className="w-3 h-3 text-white rotate-180" />
                        </div>
                        <svg className="w-full h-full opacity-60">
                          <path d="M0,120 Q50,80 100,100 T200,90 T300,110" stroke="currentColor" strokeWidth="2" fill="none" className="text-lime-400" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center bg-lime-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Sinal Confirmado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-800 border-y border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">+3.200</div>
              <div className="text-gray-300">Traders já utilizam o UTS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">92%</div>
              <div className="text-gray-300">de acertos em reversões nos últimos 3 meses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-400 mb-2">100%</div>
              <div className="text-gray-300">Funciona em Forex, Cripto, Índices e Ações</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-900 px-6 py-3 rounded-full border border-lime-400">
              <span className="text-lime-400 font-semibold">Exclusivo para MT4</span>
            </div>
            <div className="bg-gray-900 px-6 py-3 rounded-full border border-lime-400">
              <span className="text-lime-400 font-semibold">Performance Verificada</span>
            </div>
            <div className="bg-gray-900 px-6 py-3 rounded-full border border-lime-400">
              <span className="text-lime-400 font-semibold">Desenvolvido por Traders Profissionais</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quem Usa o Ultimate Trend Signals?</h2>
            <p className="text-xl text-gray-300">Desenvolvido para traders de todos os níveis</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-400 transition-colors duration-300">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Iniciantes</h3>
              <p className="text-gray-300">Em busca de confiança na hora de entrar no mercado e precisam de sinais claros e objetivos.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-400 transition-colors duration-300">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Traders Experientes</h3>
              <p className="text-gray-300">Que querem reduzir ruído e operar com mais clareza, otimizando suas estratégias existentes.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-lime-400 transition-colors duration-300">
              <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold mb-4">Scalpers e Swing Traders</h3>
              <p className="text-gray-300">Que valorizam timing preciso de entrada e saída para maximizar lucros e minimizar riscos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Indicator Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Sobre o Ultimate Trend Signals</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Identificação Automática de Reversões</h3>
                    <p className="text-gray-300">Setas visuais aparecem automaticamente no gráfico indicando os melhores pontos de entrada e saída.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Alertas Inteligentes</h3>
                    <p className="text-gray-300">Receba alertas sonoros e notificações no celular para nunca perder uma oportunidade.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Leitura Simples</h3>
                    <p className="text-gray-300">Interface intuitiva sem necessidade de análise complexa. Verde = Compra, Vermelho = Venda.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multi-Mercado</h3>
                    <p className="text-gray-300">Funciona perfeitamente em Forex, Criptomoedas, Índices, Ações e Commodities.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-lime-400 bg-opacity-10 border border-lime-400 rounded-lg">
                <p className="text-lime-400 font-semibold text-lg">
                  "Com o UTS, você elimina a dúvida e toma decisões com confiança."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-lime-400 bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-lime-400">15min</div>
                    <div className="text-sm text-gray-300">Timeframe Ideal</div>
                  </div>
                  <div className="bg-lime-400 bg-opacity-20 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-lime-400">24/7</div>
                    <div className="text-sm text-gray-300">Funcionamento</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-gray-300">Últimos Sinais:</span>
                    <span className="text-lime-400 font-semibold">8 de 8 ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-gray-300">Precisão Hoje:</span>
                    <span className="text-lime-400 font-semibold">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <span className="text-gray-300">Trades Ativos:</span>
                    <span className="text-lime-400 font-semibold">1.247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">O Que Nossos Traders Dizem</h2>
            <p className="text-xl text-gray-300">Resultados reais de quem já usa o UTS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">João Silva</h4>
                  <p className="text-gray-400 text-sm">Trader Iniciante</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "Depois que instalei o UTS, meu operacional ficou muito mais claro. Finalmente entendi onde entrar e sair. Saí do zero para consistência em 2 meses."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Marcelo Costa</h4>
                  <p className="text-gray-400 text-sm">Trader Sênior</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "Economizei horas de análise por dia. Agora só opero com confluência real. Meu win rate subiu de 60% para 85% em 3 meses usando o UTS."
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Rafaela Santos</h4>
                  <p className="text-gray-400 text-sm">Scalper</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">
                "Uso junto com minha estratégia de price action, e os sinais são incrivelmente precisos. Perfect para scalping no M5 e M15."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-br from-lime-400 to-green-500 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Oferta Especial por Tempo Limitado!</h2>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-3xl font-bold text-gray-400 line-through">De R$197</div>
              <div className="text-5xl font-bold text-lime-600">por apenas R$47</div>
            </div>
            
            <div className="text-lg mb-8 text-gray-600">ou em até 12x de R$4,70 sem juros</div>
            
            <div className="bg-red-100 border border-red-300 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center space-x-4 text-red-700">
                <Clock className="w-6 h-6" />
                <span className="font-bold">Tempo Restante:</span>
                <div className="flex space-x-2">
                  <div className="bg-red-700 text-white px-3 py-1 rounded font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="font-bold">:</span>
                  <div className="bg-red-700 text-white px-3 py-1 rounded font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="font-bold">:</span>
                  <div className="bg-red-700 text-white px-3 py-1 rounded font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-lime-100 border border-lime-300 rounded-lg p-4 mb-8">
              <p className="text-lime-800 font-semibold">⚠️ Vagas limitadas por licença. Aproveite agora!</p>
            </div>
            
            <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6">
              Quero Garantir Minha Licença com Desconto
            </button>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span>Garantia de satisfação 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-300">Tire suas dúvidas sobre o Ultimate Trend Signals</p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg border border-gray-700">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-lime-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-lime-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-lime-400">Ultimate Trend Signals</h3>
              <p className="text-gray-300">O indicador mais confiável para MT4. Desenvolvido por traders profissionais para traders de todos os níveis.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-lime-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-lime-400 transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-lime-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <p>Produto Digital | Envio Imediato por E-mail Após Compra</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ultimate Trend Signals. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
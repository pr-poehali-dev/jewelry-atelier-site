import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const portfolio = [
    {
      id: 1,
      title: "Кольцо с сапфиром",
      category: "Кольца",
      image: "https://cdn.poehali.dev/projects/3299a43a-9991-4666-9df8-6caaaf58949f/files/b7c8d24a-9d41-4d82-8d19-074084a76679.jpg"
    },
    {
      id: 2,
      title: "Колье с бриллиантом",
      category: "Колье",
      image: "https://cdn.poehali.dev/projects/3299a43a-9991-4666-9df8-6caaaf58949f/files/b07a940d-3eee-4fe9-bd88-758331737a8f.jpg"
    },
    {
      id: 3,
      title: "Серьги с изумрудом",
      category: "Серьги",
      image: "https://cdn.poehali.dev/projects/3299a43a-9991-4666-9df8-6caaaf58949f/files/71b3647b-2ab5-4eda-b154-7a50e4918374.jpg"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-primary">Ювелирная Мастерская ВикГолд</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">О нас</a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Работы</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <a href="tel:+79035336999" className="text-accent hover:text-accent/80 transition-colors font-medium">
            +7 903-533-69-99
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 animate-fade-in">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-6 leading-tight">
            Уникальные украшения<br />ручной работы
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Создаём ювелирные изделия с душой. Каждое украшение — это история, воплощённая в благородных металлах и драгоценных камнях.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Мастерство передаётся из поколения в поколение
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наша мастерская специализируется на создании эксклюзивных ювелирных украшений. Мы работаем с золотом, серебром, платиной и драгоценными камнями высочайшего качества.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждое изделие проходит все этапы создания в наших руках — от эскиза до финальной полировки. Мы не производим массовую продукцию, а создаём произведения искусства.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-accent mb-2">
                  <Icon name="Award" size={40} className="mx-auto" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">15+ лет</h4>
                <p className="text-muted-foreground">опыта работы</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-accent mb-2">
                  <Icon name="Users" size={40} className="mx-auto" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">500+</h4>
                <p className="text-muted-foreground">довольных клиентов</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-accent mb-2">
                  <Icon name="Gem" size={40} className="mx-auto" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">100%</h4>
                <p className="text-muted-foreground">ручная работа</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-accent mb-2">
                  <Icon name="Shield" size={40} className="mx-auto" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-2">Гарантия</h4>
                <p className="text-muted-foreground">на все изделия</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4">
              Наши работы
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое украшение создано с любовью и вниманием к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-accent font-medium mb-2">{item.category}</p>
                  <h4 className="text-2xl font-serif font-bold text-primary">{item.title}</h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center animate-fade-in">
            Свяжитесь с нами
          </h3>
          
          <div className="mb-12 animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[400px] relative">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.538806%2C55.781472&z=16&l=map&pt=37.538806,55.781472,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'relative' }}
              />
            </div>
            <div className="mt-4 text-center">
              <Button 
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a 
                  href="https://yandex.ru/maps/?rtext=~55.781472,37.538806&rtt=auto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Icon name="Navigation" size={20} />
                  Построить маршрут
                </a>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Адрес мастерской</h4>
                    <p className="text-muted-foreground">Москва, Хорошёвский</p>
                    <p className="text-muted-foreground">Улица Куусинена, 7 к2, 123308</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Телефон</h4>
                    <a href="tel:+79035336999" className="text-muted-foreground hover:text-accent transition-colors">
                      +7 903-533-69-99
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Icon name="Clock" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Время работы</h4>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 11:00 - 19:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-accent mt-1">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <a href="mailto:info@jewelry.ru" className="text-muted-foreground hover:text-accent transition-colors">
                      info@jewelry.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 animate-scale-in">
              <h4 className="text-2xl font-serif font-bold text-primary mb-6">
                Записаться на консультацию
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background"
                    placeholder="+7 903-533-69-99"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Сообщение
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-background min-h-[120px]"
                    placeholder="Расскажите, какое украшение вы хотите создать..."
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © 2024 Ювелирная Мастерская ВикГолд. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "AIRES PRO",
      price: "€698",
      period: "Ogni 6 mesi",
      subtitle: "ABBONAMENTO SEMESTRALE",
      features: [
        "Accesso al nostro portafoglio di investimenti dinamico",
        "Approfondimenti con le nostre migliori analisi",
        "Gruppo Telegram riservato agli abbonati",
        "Previsioni di mercato e opportunità",
        "Aggiornamenti in tempo reale sulla nostra operatività",
        "🎁 BONUS: Corso avanzato di analisi finanziaria"
      ]
    },
    {
      name: "AIRES PRO",
      price: "€998", 
      period: "Ogni anno",
      subtitle: "ABBONAMENTO ANNUALE",
      popular: true,
      features: [
        "Accesso al nostro portafoglio di investimenti dinamico",
        "Approfondimenti con le nostre migliori analisi", 
        "Gruppo Telegram riservato agli abbonati",
        "Previsioni di mercato e opportunità",
        "Aggiornamenti in tempo reale sulla nostra operatività",
        "🎁 BONUS: Corso avanzato di analisi finanziaria"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Scegli il tuo piano di pagamento
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Puoi decidere se abbonarti per sei mesi o risparmiare grazie all'abbonamento annuale. 
            Se hai un ulteriore codice sconto ricordati di utilizzarlo al check-out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'} 
                          hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Più Popolare
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                </div>
                <CardDescription className="text-lg">{plan.period}</CardDescription>
                <div className="mt-4 px-4 py-2 bg-muted rounded-lg">
                  <span className="text-sm font-medium text-muted-foreground">
                    {plan.subtitle}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  ABBONATI ORA
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Il tuo abbonamento ad Aires Pro si rinnova automaticamente ogni semestre/anno. 
            Puoi annullare l'abbonamento in qualsiasi momento, senza penali, direttamente dal tuo account. 
            La cancellazione avrà effetto a partire dal ciclo successivo di fatturazione.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
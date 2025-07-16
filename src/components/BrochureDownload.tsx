import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const brochureFormSchema = z.object({
  fullName: z.string().min(2, 'Il nome deve contenere almeno 2 caratteri'),
  email: z.string().email('Inserisci un indirizzo email valido'),
  company: z.string().optional(),
  phone: z.string().optional(),
  role: z.string().optional(),
});

type BrochureFormData = z.infer<typeof brochureFormSchema>;

export default function BrochureDownload() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BrochureFormData>({
    resolver: zodResolver(brochureFormSchema),
  });

  const handleDownload = async (data: BrochureFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save contact data to Supabase
      const { error } = await supabase
        .from('brochure_downloads')
        .insert({
          full_name: data.fullName,
          email: data.email,
          company: data.company || null,
          phone: data.phone || null,
          role: data.role || null,
        });

      if (error) {
        throw error;
      }

      // Show success message
      setIsSuccess(true);
      toast({
        title: "Grazie!",
        description: "La tua richiesta è stata registrata. Il download inizierà automaticamente.",
      });

      // Reset form
      reset();

      // Trigger download (you'll need to upload the PDF to public folder)
      // For now, we'll simulate the download
      setTimeout(() => {
        // Here you would trigger the actual PDF download
        // Example: window.open('/path-to-your-brochure.pdf', '_blank');
        console.log('PDF download would start here');
      }, 1000);

    } catch (error) {
      console.error('Error saving brochure download data:', error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-foreground">Download Completato!</h3>
            <p className="text-muted-foreground">
              Grazie per il tuo interesse. Il download della brochure dovrebbe essere iniziato automaticamente.
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              variant="outline"
              className="mt-4"
            >
              Scarica di nuovo
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-aires-navy to-aires-emerald bg-clip-text text-transparent">
              Scarica la Nostra Brochure
            </h2>
            <p className="text-lg text-muted-foreground">
              Scopri tutti i nostri servizi di analisi finanziaria e intelligence di mercato in un documento completo e dettagliato.
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <FileText className="h-8 w-8 text-aires-emerald mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Cosa troverai nella brochure</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• Overview completa dei nostri servizi</li>
                <li>• Case studies e risultati ottenuti</li>
                <li>• Metodologie di analisi avanzate</li>
                <li>• Informazioni sui nostri esperti</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <Card>
          <CardHeader>
            <CardTitle>Compila i tuoi dati</CardTitle>
            <CardDescription>
              Inserisci le tue informazioni per ricevere la brochure gratuita
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleDownload)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome e Cognome *</Label>
                <Input
                  id="fullName"
                  {...register('fullName')}
                  placeholder="Il tuo nome completo"
                  className={errors.fullName ? 'border-destructive' : ''}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="tua@email.com"
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Azienda</Label>
                <Input
                  id="company"
                  {...register('company')}
                  placeholder="Nome della tua azienda"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefono</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="+39 123 456 7890"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Ruolo</Label>
                <Input
                  id="role"
                  {...register('role')}
                  placeholder="Il tuo ruolo in azienda"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-aires-navy to-aires-emerald hover:from-aires-blue hover:to-aires-emerald"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Elaborazione...'
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Scarica Brochure
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Campi obbligatori. I tuoi dati saranno trattati secondo la nostra privacy policy.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
-- Create a table for brochure download leads
CREATE TABLE public.brochure_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  role TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.brochure_downloads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for lead generation)
CREATE POLICY "Allow public insert for brochure downloads" 
ON public.brochure_downloads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin access (if needed later)
CREATE POLICY "Allow admin read access" 
ON public.brochure_downloads 
FOR SELECT 
USING (false); -- Will be updated when admin auth is implemented

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_brochure_downloads_updated_at
BEFORE UPDATE ON public.brochure_downloads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
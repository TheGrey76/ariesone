-- Create a storage bucket for reports
INSERT INTO storage.buckets (id, name, public) VALUES ('reports', 'reports', true);

-- Create policy to allow public access to read files
CREATE POLICY "Public read access for reports" ON storage.objects
FOR SELECT USING (bucket_id = 'reports');

-- Create policy to allow uploads (you can restrict this later)
CREATE POLICY "Allow uploads to reports bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'reports');
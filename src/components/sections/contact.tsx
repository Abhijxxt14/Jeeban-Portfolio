'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail ,Instagram } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Have a question, a project idea, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="font-headline text-2xl font-semibold">Contact Details</h3>
            <p className="text-muted-foreground">
              You can reach me via email or connect with me on social media. I'm always open to new opportunities and collaborations.
            </p>
            <div className="flex flex-col gap-4">
              <Link href="mailto:jeebankrushnasahu1@gmail.com" className="flex items-center gap-3 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-base sm:text-lg group-hover:underline break-all">jeebankrushnasahu1@gmail.com</span>
              </Link>
              <Link href="https://linkedin.com/in/jeeban-krushna-sahu-004228301" target="_blank" className="flex items-center gap-3 group">
                <Linkedin className="h-6 w-6 text-primary" />
                <span className="text-base sm:text-lg group-hover:underline">LinkedIn</span>
              </Link>
              <Link href="https://github.com/Jeeban-2006" target="_blank" className="flex items-center gap-3 group">
                <Github className="h-6 w-6 text-primary" />
                <span className="text-base sm:text-lg group-hover:underline">GitHub</span>
              </Link>
              <Link href="https://www.instagram.com/jenext.exe?igsh=bnRyZGhxeXR1YTN2" target="_blank" className="flex items-center gap-3 group">
                <Instagram className="h-6 w-6 text-primary" />
                <span className="text-base sm:text-lg group-hover:underline">Instagram</span>
              </Link>
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message here..." rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}

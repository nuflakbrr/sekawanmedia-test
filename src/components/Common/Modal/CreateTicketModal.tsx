'use client';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { faker } from '@faker-js/faker';
import { z } from 'zod';

import { useAuth } from '@/hooks/useAuth';
import { useAxios } from '@/hooks/useAxios';
import { useToast } from '@/components/ui/use-toast';
import { CreateTicketModal as CreateTicketModalProps } from '@/interfaces/modal';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Modal from './Modal';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const CreateTicketModal: FC<CreateTicketModalProps> = ({ isOpen, onClose }) => {
  // Define state
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Define hooks
  const { toast } = useToast();
  const { accessToken, user } = useAuth();
  const axios = useAxios(accessToken);
  const router = useRouter();

  // Define form schema
  const formSchema = z.object({
    priority: z.string().min(1, {
      message: 'Prioritas tiket harus diisi',
    }),
    title: z.string().min(5, {
      message: 'Judul tiket harus lebih dari 5 karakter',
    }),
    content: z.string().min(10, {
      message: 'Konten tiket harus lebih dari 10 karakter',
    }),
  });

  // Define type form values
  type CreateTicketFormValues = z.infer<typeof formSchema>;

  // Define default value form
  const form = useForm<CreateTicketFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priority: '',
      title: '',
      content: '',
    },
  });

  // Validating state form
  const { isSubmitting, isValid } = form.formState;

  // Handle submit form
  const onConfirm = async (dataSubmit: CreateTicketFormValues) => {
    const sendData = {
      id: faker.string.uuid(),
      title: dataSubmit.title,
      content: dataSubmit.content,
      customerName: user?.name,
      priority: dataSubmit.priority,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };

    try {
      const { status } = await axios.post('ticket', sendData);

      if (status === 201) {
        onClose;
        router.refresh();
        form.reset();
        toast({ description: `Success` });
      } else {
        toast({
          description: 'Failed',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        description: 'Error',
        variant: 'destructive',
      });
    }
  };

  // Trigger mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle if not mounted
  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Buat Tiket"
      description="Buat tiket sesuai dengan kebutuhan Anda."
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onConfirm)} className="space-y-4">
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value ? field.value : ''}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder={`Title`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder={`Content`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end w-full">
            <Button variant="outline" onClick={onClose}>
              Tutup
            </Button>
            <Button
              variant="default"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              Buat Tiket
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default CreateTicketModal;

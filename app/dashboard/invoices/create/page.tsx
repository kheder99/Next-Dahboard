import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

async function Page() {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'invoice', href: '/dashboard/invoices', active: false },
          { label: 'create', href: '/dashboard/invoices/create', active: true },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}

export default Page;

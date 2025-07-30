--Enable UUID extension
CREATE extension if not exists "uuid-ossp";

-- Users table
CREATE table users(
  id UUID primary key default uuid_generate_v4(),
  email varchar(255) unique not null,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  full_name varchar(255),
  customer_id varchar(255) unique,
  price_id varchar(255),
  status varchar(50) DEFAULT 'inactive'
);

-- PDF SUMMARY Table (This will store the PDF Processing Result)
CREATE TABLE pdf_summaries (
  id UUID primary key DEFAULT uuid_generate_v4(),
  user_id varchar(255) not null,
  original_file_url TEXT NOT NULL,
  summary_text TEXT NOT NULL,
  status varchar(50) DEFAULT 'completed',
  title TEXT,
  file_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Payments table 
CREATE table payments(
  id UUID primary key DEFAULT uuid_generate_v4(),
  amount integer not null,
  status varchar(50) not null,
  stripe_payment_id varchar(255) unique not null,
  price_id varchar(255) not null,
  user_email varchar(255) not null references users(email),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- updated_at trigger function
CREATE OR REPLACE function update_updated_at_column()
returns trigger as 
begin
  NEW.updated_at = CURRENT_TIMESTAMP;
  return NEW;
END;
$$ language 'plpgsql';

-- add triggers to update update_updated_at 
CREATE OR REPLACE function update_users_updated_at()
    before update on users;
    for each row
    execute function update_updated_at_column();


CREATE TRIGGER update_pdf_summaries_updated_at
    before update on pdf_summaries
    for each row
    execute function update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
    before update on payments
    for each row
    execute function update_updated_at_column();







  




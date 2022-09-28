CREATE TABLE public.values (
    value_id uuid NOT NULL,
    value numeric(13, 5) NOT NULL DEFAULT 0,
    created_at timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT values_pkey PRIMARY KEY (value_id, created_at)
);
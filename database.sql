--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: ainea
--

CREATE TABLE public.courses (
    course_id integer NOT NULL,
    course_name character varying(50) NOT NULL,
    modules integer NOT NULL
);


ALTER TABLE public.courses OWNER TO ainea;

--
-- Name: modules; Type: TABLE; Schema: public; Owner: ainea
--

CREATE TABLE public.modules (
    module_id integer NOT NULL,
    module_name character varying(30) NOT NULL
);


ALTER TABLE public.modules OWNER TO ainea;

--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: ainea
--

COPY public.courses (course_id, course_name, modules) FROM stdin;
1	Computer Science	10
3	Mechanical Engineering	20
\.


--
-- Data for Name: modules; Type: TABLE DATA; Schema: public; Owner: ainea
--

COPY public.modules (module_id, module_name) FROM stdin;
1	Introduction
\.


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: ainea
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (course_id);


--
-- Name: modules modules_pkey; Type: CONSTRAINT; Schema: public; Owner: ainea
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (module_id);


--
-- PostgreSQL database dump complete
--


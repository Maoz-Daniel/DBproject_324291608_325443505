--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-04 15:29:08 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 219 (class 1259 OID 16659)
-- Name: accessdevice; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.accessdevice (
    deviceid integer NOT NULL,
    zoneid integer NOT NULL,
    gymid integer NOT NULL,
    devicetype character varying(50) NOT NULL
);


ALTER TABLE public.accessdevice OWNER TO maoz3242;

--
-- TOC entry 225 (class 1259 OID 16758)
-- Name: entry record; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public."entry record" (
    "personID" bigint,
    "deviceID" bigint,
    "zoneID" bigint,
    "gymID" bigint,
    "entryTime" text
);


ALTER TABLE public."entry record" OWNER TO maoz3242;

--
-- TOC entry 226 (class 1259 OID 16763)
-- Name: entryrecord; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.entryrecord (
    personid integer NOT NULL,
    deviceid integer NOT NULL,
    zoneid integer NOT NULL,
    gymid integer NOT NULL,
    entrytime timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT valid_entry_time CHECK ((entrytime <= CURRENT_TIMESTAMP))
);


ALTER TABLE public.entryrecord OWNER TO maoz3242;

--
-- TOC entry 222 (class 1259 OID 16709)
-- Name: exitrecord; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.exitrecord (
    personid integer NOT NULL,
    deviceid integer NOT NULL,
    zoneid integer NOT NULL,
    gymid integer NOT NULL,
    exittime timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT valid_exit_time CHECK ((exittime <= CURRENT_TIMESTAMP))
);


ALTER TABLE public.exitrecord OWNER TO maoz3242;

--
-- TOC entry 224 (class 1259 OID 16753)
-- Name: gym; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.gym (
    gymid integer NOT NULL,
    name character varying(100) NOT NULL,
    gymlocation character varying(255) NOT NULL
);


ALTER TABLE public.gym OWNER TO maoz3242;

--
-- TOC entry 221 (class 1259 OID 16681)
-- Name: maintenanceworker; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.maintenanceworker (
    personid integer NOT NULL,
    contactinfo character varying(100) NOT NULL,
    hiredate date NOT NULL,
    CONSTRAINT valid_contact CHECK ((((contactinfo)::text ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'::text) OR ((contactinfo)::text ~ '^\+?[0-9]{10,15}$'::text)))
);


ALTER TABLE public.maintenanceworker OWNER TO maoz3242;

--
-- TOC entry 220 (class 1259 OID 16669)
-- Name: member; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.member (
    personid integer NOT NULL,
    memberstartdate date NOT NULL,
    membershiptype character varying(50) NOT NULL,
    isactive boolean DEFAULT true,
    CONSTRAINT member_membershiptype_check CHECK (((membershiptype)::text = ANY ((ARRAY['Monthly'::character varying, 'Annual'::character varying, 'Quarterly'::character varying, 'Daily'::character varying, 'Personal Training'::character varying, 'Expired'::character varying])::text[])))
);


ALTER TABLE public.member OWNER TO maoz3242;

--
-- TOC entry 217 (class 1259 OID 16634)
-- Name: person; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.person (
    personid integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    dateofbirth date,
    CONSTRAINT person_dateofbirth_check CHECK ((dateofbirth <= CURRENT_DATE))
);


ALTER TABLE public.person OWNER TO maoz3242;

--
-- TOC entry 223 (class 1259 OID 16726)
-- Name: repair; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.repair (
    personid integer NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deviceid integer NOT NULL,
    zoneid integer NOT NULL,
    gymid integer NOT NULL,
    specialnotes character varying(255),
    servicetype character varying(50) NOT NULL,
    CONSTRAINT repair_servicetype_check CHECK (((servicetype)::text = ANY ((ARRAY['Urgent Repair'::character varying, 'Maintenance'::character varying, 'Upgrade'::character varying, 'Inspection'::character varying, 'Replacement'::character varying])::text[]))),
    CONSTRAINT valid_repair_date CHECK ((date <= CURRENT_TIMESTAMP))
);


ALTER TABLE public.repair OWNER TO maoz3242;

--
-- TOC entry 218 (class 1259 OID 16647)
-- Name: zone; Type: TABLE; Schema: public; Owner: maoz3242
--

CREATE TABLE public.zone (
    zoneid integer NOT NULL,
    gymid integer NOT NULL,
    zonetype character varying(50) NOT NULL,
    onlyformembers boolean DEFAULT false,
    isaccessible boolean DEFAULT true
);


ALTER TABLE public.zone OWNER TO maoz3242;

--
-- TOC entry 3438 (class 0 OID 16659)
-- Dependencies: 219
-- Data for Name: accessdevice; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.accessdevice (deviceid, zoneid, gymid, devicetype) FROM stdin;
1	10	214	Card Reader
2	10	214	Barcode Scanner
3	10	214	QR Code Scanner
4	2	139	Keypad Access
5	2	139	Keypad Access
6	5	250	NFC Reader
7	5	250	Turnstile
8	5	250	Turnstile
9	5	186	NFC Reader
10	5	186	Card Reader
11	4	284	Barcode Scanner
12	4	284	Card Reader
13	8	310	Barcode Scanner
14	8	310	Mobile App Scanner
15	8	310	Keypad Access
16	8	105	Facial Recognition
17	8	105	Keypad Access
18	8	194	Keypad Access
19	8	194	Facial Recognition
20	8	194	Gate Access
21	3	67	NFC Reader
22	3	67	Gate Access
23	4	12	Barcode Scanner
24	4	12	NFC Reader
25	3	212	Mobile App Scanner
26	3	212	Card Reader
27	1	105	Gate Access
28	1	105	QR Code Scanner
29	1	105	Gate Access
30	3	104	Keypad Access
31	3	104	Facial Recognition
32	3	104	NFC Reader
33	5	263	NFC Reader
34	5	263	NFC Reader
35	10	308	Barcode Scanner
36	10	308	Facial Recognition
37	10	308	NFC Reader
38	2	397	QR Code Scanner
39	2	397	Gate Access
40	3	251	Turnstile
41	3	251	Turnstile
42	9	61	Mobile App Scanner
43	9	61	NFC Reader
44	2	122	Mobile App Scanner
45	2	122	NFC Reader
46	1	76	Mobile App Scanner
47	1	76	Card Reader
48	5	288	Turnstile
49	5	288	Gate Access
50	5	288	Gate Access
51	8	64	Mobile App Scanner
52	8	64	Fingerprint Scanner
53	2	209	Mobile App Scanner
54	2	209	NFC Reader
55	2	209	Barcode Scanner
56	1	176	Keypad Access
57	1	176	Mobile App Scanner
58	1	176	Turnstile
59	6	288	Gate Access
60	6	288	Fingerprint Scanner
61	10	346	Barcode Scanner
62	10	346	Facial Recognition
63	10	346	Gate Access
64	5	364	Facial Recognition
65	5	364	Barcode Scanner
66	10	391	Gate Access
67	10	391	Mobile App Scanner
68	2	90	Barcode Scanner
69	2	90	Mobile App Scanner
70	2	90	QR Code Scanner
71	8	394	Gate Access
72	8	394	Facial Recognition
73	8	394	Gate Access
74	6	32	Facial Recognition
75	6	32	Facial Recognition
76	5	120	Barcode Scanner
77	5	120	Gate Access
78	5	120	Card Reader
79	3	282	Mobile App Scanner
80	3	282	Mobile App Scanner
81	3	282	Gate Access
82	4	292	Mobile App Scanner
83	4	292	Facial Recognition
84	3	248	Fingerprint Scanner
85	3	248	Keypad Access
86	8	5	Turnstile
87	8	5	Gate Access
88	5	44	Fingerprint Scanner
89	5	44	Gate Access
90	7	98	NFC Reader
91	7	98	Keypad Access
92	7	98	Card Reader
93	5	340	Facial Recognition
94	5	340	QR Code Scanner
95	9	125	Facial Recognition
96	9	125	Keypad Access
97	9	125	Facial Recognition
98	1	242	Card Reader
99	1	242	Fingerprint Scanner
100	1	242	QR Code Scanner
101	6	10	Fingerprint Scanner
102	6	10	Gate Access
103	8	178	Facial Recognition
104	8	178	Facial Recognition
105	9	177	Mobile App Scanner
106	9	177	Mobile App Scanner
107	9	177	NFC Reader
108	1	33	QR Code Scanner
109	1	33	NFC Reader
110	1	33	NFC Reader
111	6	397	NFC Reader
112	6	397	Keypad Access
113	7	144	Mobile App Scanner
114	7	144	NFC Reader
115	7	144	Fingerprint Scanner
116	6	214	Keypad Access
117	6	214	Fingerprint Scanner
118	6	214	Barcode Scanner
119	1	239	Card Reader
120	1	239	Barcode Scanner
121	3	35	Mobile App Scanner
122	3	35	Fingerprint Scanner
123	6	384	QR Code Scanner
124	6	384	Card Reader
125	10	166	Turnstile
126	10	166	Keypad Access
127	10	166	Turnstile
128	6	48	Mobile App Scanner
129	6	48	Barcode Scanner
130	6	48	Barcode Scanner
131	5	327	NFC Reader
132	5	327	Keypad Access
133	5	327	QR Code Scanner
134	6	158	NFC Reader
135	6	158	Fingerprint Scanner
136	2	32	Facial Recognition
137	2	32	Keypad Access
138	2	32	NFC Reader
139	2	284	Card Reader
140	2	284	Gate Access
141	2	284	Turnstile
142	5	379	Card Reader
143	5	379	Mobile App Scanner
144	5	379	Keypad Access
145	10	118	Keypad Access
146	10	118	Card Reader
147	10	118	Fingerprint Scanner
148	1	19	Fingerprint Scanner
149	1	19	Card Reader
150	1	19	Turnstile
151	5	392	Card Reader
152	5	392	Keypad Access
153	5	392	QR Code Scanner
154	6	279	Card Reader
155	6	279	Gate Access
156	6	279	Keypad Access
157	3	211	Gate Access
158	3	211	QR Code Scanner
159	3	211	Mobile App Scanner
160	1	212	NFC Reader
161	1	212	Gate Access
162	1	158	Facial Recognition
163	1	158	Gate Access
164	8	248	NFC Reader
165	8	248	QR Code Scanner
166	8	248	Barcode Scanner
167	3	170	Card Reader
168	3	170	QR Code Scanner
169	3	170	Card Reader
170	8	32	Mobile App Scanner
171	8	32	Fingerprint Scanner
172	8	32	QR Code Scanner
173	2	56	Facial Recognition
174	2	56	Card Reader
175	2	56	Keypad Access
176	2	51	Card Reader
177	2	51	Card Reader
178	3	61	NFC Reader
179	3	61	NFC Reader
180	4	151	Gate Access
181	4	151	NFC Reader
182	2	280	Gate Access
183	2	280	Facial Recognition
184	8	321	QR Code Scanner
185	8	321	Barcode Scanner
186	8	321	QR Code Scanner
187	6	112	QR Code Scanner
188	6	112	NFC Reader
189	8	169	Barcode Scanner
190	8	169	Fingerprint Scanner
191	8	169	Turnstile
192	7	274	Gate Access
193	7	274	Barcode Scanner
194	5	371	Fingerprint Scanner
195	5	371	Card Reader
196	5	371	Facial Recognition
197	3	60	NFC Reader
198	3	60	Mobile App Scanner
199	3	60	Turnstile
200	4	49	Keypad Access
201	4	49	Fingerprint Scanner
202	4	49	Mobile App Scanner
203	2	107	Card Reader
204	2	107	NFC Reader
205	2	107	Turnstile
206	7	262	Barcode Scanner
207	7	262	Turnstile
208	4	62	Facial Recognition
209	4	62	Facial Recognition
210	10	50	Gate Access
211	10	50	Barcode Scanner
212	10	50	QR Code Scanner
213	1	289	Barcode Scanner
214	1	289	Turnstile
215	1	289	Mobile App Scanner
216	5	353	Turnstile
217	5	353	Facial Recognition
218	5	215	Facial Recognition
219	5	215	Facial Recognition
220	5	224	Barcode Scanner
221	5	224	Card Reader
222	5	224	Mobile App Scanner
223	2	290	Barcode Scanner
224	2	290	Mobile App Scanner
225	9	306	Keypad Access
226	9	306	NFC Reader
227	2	134	Barcode Scanner
228	2	134	Fingerprint Scanner
229	2	134	Keypad Access
230	7	316	Gate Access
231	7	316	Mobile App Scanner
232	7	316	Card Reader
233	3	143	NFC Reader
234	3	143	Keypad Access
235	8	195	QR Code Scanner
236	8	195	Facial Recognition
237	10	299	Turnstile
238	10	299	Gate Access
239	10	299	Keypad Access
240	5	15	QR Code Scanner
241	5	15	Card Reader
242	10	246	Keypad Access
243	10	246	Gate Access
244	10	246	Facial Recognition
245	2	326	Card Reader
246	2	326	Facial Recognition
247	2	326	Mobile App Scanner
248	1	152	Fingerprint Scanner
249	1	152	Facial Recognition
250	1	152	Turnstile
251	1	257	Barcode Scanner
252	1	257	NFC Reader
253	7	165	Mobile App Scanner
254	7	165	NFC Reader
255	4	177	Barcode Scanner
256	4	177	Keypad Access
257	4	177	Turnstile
258	9	202	Card Reader
259	9	202	QR Code Scanner
260	8	308	Fingerprint Scanner
261	8	308	Mobile App Scanner
262	1	52	NFC Reader
263	1	52	Facial Recognition
264	3	253	Card Reader
265	3	253	NFC Reader
266	3	253	NFC Reader
267	3	17	Turnstile
268	3	17	Barcode Scanner
269	3	17	Fingerprint Scanner
270	8	324	QR Code Scanner
271	8	324	Turnstile
272	2	244	Keypad Access
273	2	244	Card Reader
274	2	244	Card Reader
275	2	14	QR Code Scanner
276	2	14	Mobile App Scanner
277	2	14	Card Reader
278	9	291	NFC Reader
279	9	291	Gate Access
280	8	350	Card Reader
281	8	350	Barcode Scanner
282	8	350	Turnstile
283	3	246	Fingerprint Scanner
284	3	246	Facial Recognition
285	3	246	Card Reader
286	1	16	Gate Access
287	1	16	Fingerprint Scanner
288	6	309	Gate Access
289	6	309	Facial Recognition
290	8	184	Fingerprint Scanner
291	8	184	Facial Recognition
292	5	301	Turnstile
293	5	301	QR Code Scanner
294	5	301	NFC Reader
295	5	328	NFC Reader
296	5	328	Mobile App Scanner
297	5	328	Card Reader
298	10	254	Mobile App Scanner
299	10	254	Keypad Access
300	10	254	Barcode Scanner
301	9	209	Facial Recognition
302	9	209	Turnstile
303	2	353	Keypad Access
304	2	353	Turnstile
305	5	192	Keypad Access
306	5	192	QR Code Scanner
307	5	192	Facial Recognition
308	6	352	NFC Reader
309	6	352	Mobile App Scanner
310	5	339	Facial Recognition
311	5	339	Turnstile
312	5	339	NFC Reader
313	6	155	Mobile App Scanner
314	6	155	Fingerprint Scanner
315	3	42	Turnstile
316	3	42	Mobile App Scanner
317	3	42	Gate Access
318	1	332	Fingerprint Scanner
319	1	332	Turnstile
320	8	313	QR Code Scanner
321	8	313	Gate Access
322	8	313	Card Reader
323	8	386	Barcode Scanner
324	8	386	QR Code Scanner
325	7	346	Fingerprint Scanner
326	7	346	Facial Recognition
327	5	279	Mobile App Scanner
328	5	279	Turnstile
329	7	92	QR Code Scanner
330	7	92	Fingerprint Scanner
331	5	229	NFC Reader
332	5	229	Gate Access
333	6	1	Mobile App Scanner
334	6	1	Facial Recognition
335	6	1	Gate Access
336	6	311	Turnstile
337	6	311	Fingerprint Scanner
338	6	311	Card Reader
339	8	380	Barcode Scanner
340	8	380	Keypad Access
341	5	35	Fingerprint Scanner
342	5	35	QR Code Scanner
343	5	35	Gate Access
344	5	299	Fingerprint Scanner
345	5	299	Mobile App Scanner
346	5	299	Turnstile
347	7	370	Fingerprint Scanner
348	7	370	Facial Recognition
349	7	370	Gate Access
350	4	58	Turnstile
351	4	58	Turnstile
352	4	58	Barcode Scanner
353	6	297	NFC Reader
354	6	297	Turnstile
355	3	161	Mobile App Scanner
356	3	161	Mobile App Scanner
357	3	161	Mobile App Scanner
358	6	63	Facial Recognition
359	6	63	Facial Recognition
360	5	398	Keypad Access
361	5	398	QR Code Scanner
362	5	398	Barcode Scanner
363	6	76	Keypad Access
364	6	76	Turnstile
365	6	76	QR Code Scanner
366	1	14	Gate Access
367	1	14	Turnstile
368	1	14	QR Code Scanner
369	9	39	Turnstile
370	9	39	Card Reader
371	7	293	Mobile App Scanner
372	7	293	Barcode Scanner
373	7	293	Mobile App Scanner
374	5	196	Barcode Scanner
375	5	196	NFC Reader
376	5	214	Keypad Access
377	5	214	Keypad Access
378	5	214	Mobile App Scanner
379	8	318	Card Reader
380	8	318	NFC Reader
381	8	318	Keypad Access
382	8	280	QR Code Scanner
383	8	280	Keypad Access
384	8	280	Card Reader
385	1	45	Card Reader
386	1	45	Gate Access
387	1	45	Facial Recognition
388	5	173	Turnstile
389	5	173	Turnstile
390	5	173	Fingerprint Scanner
391	8	82	Card Reader
392	8	82	NFC Reader
393	8	82	QR Code Scanner
394	10	324	Fingerprint Scanner
395	10	324	Turnstile
396	6	340	Card Reader
397	6	340	NFC Reader
398	5	90	QR Code Scanner
399	5	90	Card Reader
400	4	93	Fingerprint Scanner
401	4	93	Gate Access
402	9	90	QR Code Scanner
403	9	90	NFC Reader
404	9	90	Mobile App Scanner
405	2	361	Mobile App Scanner
406	2	361	Keypad Access
407	2	361	Card Reader
408	2	39	Turnstile
409	2	39	Gate Access
410	3	389	Keypad Access
411	3	389	Turnstile
412	3	389	Facial Recognition
413	2	25	Turnstile
414	2	25	Card Reader
415	8	6	Card Reader
416	8	6	Fingerprint Scanner
417	8	6	Keypad Access
418	3	287	QR Code Scanner
419	3	287	Mobile App Scanner
420	3	287	Barcode Scanner
421	5	95	NFC Reader
422	5	95	Card Reader
423	7	140	Keypad Access
424	7	140	Card Reader
425	10	208	Barcode Scanner
426	10	208	Mobile App Scanner
427	6	379	Fingerprint Scanner
428	6	379	QR Code Scanner
429	7	231	Card Reader
430	7	231	QR Code Scanner
431	7	231	QR Code Scanner
432	2	393	QR Code Scanner
433	2	393	Gate Access
434	10	329	Mobile App Scanner
435	10	329	Barcode Scanner
436	10	329	QR Code Scanner
437	7	278	Barcode Scanner
438	7	278	Keypad Access
439	7	278	Barcode Scanner
440	10	5	QR Code Scanner
441	10	5	QR Code Scanner
442	4	288	QR Code Scanner
443	4	288	Card Reader
444	3	357	Facial Recognition
445	3	357	Facial Recognition
446	3	171	NFC Reader
447	3	171	QR Code Scanner
448	7	347	QR Code Scanner
449	7	347	Gate Access
450	1	160	Mobile App Scanner
451	1	160	Gate Access
452	7	221	Keypad Access
453	7	221	NFC Reader
454	8	375	Facial Recognition
455	8	375	Fingerprint Scanner
456	1	229	Facial Recognition
457	1	229	Turnstile
458	2	48	Fingerprint Scanner
459	2	48	Facial Recognition
460	2	48	Fingerprint Scanner
461	9	60	Gate Access
462	9	60	Barcode Scanner
463	9	60	Barcode Scanner
464	6	208	QR Code Scanner
465	6	208	NFC Reader
466	5	189	Card Reader
467	5	189	Gate Access
468	5	360	Keypad Access
469	5	360	Facial Recognition
470	10	52	Fingerprint Scanner
471	10	52	NFC Reader
472	7	196	Gate Access
473	7	196	Barcode Scanner
474	5	144	Mobile App Scanner
475	5	144	Turnstile
476	4	163	Fingerprint Scanner
477	4	163	Keypad Access
478	4	163	NFC Reader
479	7	105	Barcode Scanner
480	7	105	Fingerprint Scanner
481	5	55	NFC Reader
482	5	55	Gate Access
483	5	55	Gate Access
484	3	157	Gate Access
485	3	157	Barcode Scanner
486	3	157	Facial Recognition
487	4	146	Gate Access
488	4	146	QR Code Scanner
489	4	101	Gate Access
490	4	101	NFC Reader
491	3	102	Facial Recognition
492	3	102	Turnstile
493	3	206	QR Code Scanner
494	3	206	Turnstile
495	10	70	QR Code Scanner
496	10	70	Gate Access
497	10	70	Facial Recognition
498	2	83	Fingerprint Scanner
499	2	83	Gate Access
500	2	83	Keypad Access
501	10	16	Card Reader
502	10	16	Keypad Access
503	5	68	Turnstile
504	5	68	Mobile App Scanner
505	10	355	Turnstile
506	10	355	Fingerprint Scanner
507	10	355	Fingerprint Scanner
508	3	226	Card Reader
509	3	226	Facial Recognition
510	6	33	Card Reader
511	6	33	Turnstile
512	6	33	Turnstile
513	6	78	Turnstile
514	6	78	QR Code Scanner
515	6	363	Gate Access
516	6	363	Card Reader
517	8	127	NFC Reader
518	8	127	QR Code Scanner
519	7	186	NFC Reader
520	7	186	Gate Access
521	8	97	Facial Recognition
522	8	97	Fingerprint Scanner
523	8	97	Gate Access
524	8	155	Card Reader
525	8	155	Keypad Access
526	8	155	QR Code Scanner
527	8	378	Barcode Scanner
528	8	378	Keypad Access
529	8	378	QR Code Scanner
530	10	222	Turnstile
531	10	222	Facial Recognition
532	10	222	Turnstile
533	5	312	Turnstile
534	5	312	Mobile App Scanner
535	5	312	QR Code Scanner
536	3	75	Card Reader
537	3	75	Gate Access
538	9	184	Mobile App Scanner
539	9	184	Barcode Scanner
540	10	385	Keypad Access
541	10	385	Gate Access
542	10	385	Facial Recognition
543	5	167	NFC Reader
544	5	167	Card Reader
545	7	198	Facial Recognition
546	7	198	QR Code Scanner
547	1	104	Facial Recognition
548	1	104	Turnstile
549	8	81	QR Code Scanner
550	8	81	Mobile App Scanner
551	8	81	NFC Reader
552	2	34	Barcode Scanner
553	2	34	Facial Recognition
554	8	148	Gate Access
555	8	148	Barcode Scanner
556	4	338	Card Reader
557	4	338	Barcode Scanner
558	4	338	Mobile App Scanner
559	10	150	Fingerprint Scanner
560	10	150	Barcode Scanner
561	7	286	Keypad Access
562	7	286	Keypad Access
563	2	188	Mobile App Scanner
564	2	188	Keypad Access
565	7	43	Turnstile
566	7	43	Gate Access
567	2	171	Mobile App Scanner
568	2	171	NFC Reader
569	6	163	Turnstile
570	6	163	Keypad Access
571	6	163	Turnstile
572	1	270	NFC Reader
573	1	270	Fingerprint Scanner
574	7	213	Turnstile
575	7	213	Barcode Scanner
576	7	213	Mobile App Scanner
577	7	312	NFC Reader
578	7	312	Mobile App Scanner
579	9	41	Fingerprint Scanner
580	9	41	QR Code Scanner
581	2	338	Keypad Access
582	2	338	Fingerprint Scanner
583	2	338	Gate Access
584	3	384	Keypad Access
585	3	384	Facial Recognition
586	3	384	Card Reader
587	10	312	Fingerprint Scanner
588	10	312	Gate Access
589	10	312	Barcode Scanner
590	1	324	Fingerprint Scanner
591	1	324	Fingerprint Scanner
592	1	324	Barcode Scanner
593	3	242	Fingerprint Scanner
594	3	242	Facial Recognition
595	5	124	NFC Reader
596	5	124	Turnstile
597	1	197	Barcode Scanner
598	1	197	Card Reader
599	1	197	Keypad Access
600	8	305	QR Code Scanner
601	8	305	Card Reader
602	2	204	Barcode Scanner
603	2	204	Gate Access
604	5	387	QR Code Scanner
605	5	387	Turnstile
606	7	325	Keypad Access
607	7	325	Mobile App Scanner
608	5	41	QR Code Scanner
609	5	41	Facial Recognition
610	5	41	NFC Reader
611	1	228	Turnstile
612	1	228	Barcode Scanner
613	9	156	Turnstile
614	9	156	Mobile App Scanner
615	9	156	Keypad Access
616	9	334	Barcode Scanner
617	9	334	NFC Reader
618	9	334	QR Code Scanner
619	10	27	Mobile App Scanner
620	10	27	Turnstile
621	10	27	Card Reader
622	8	102	QR Code Scanner
623	8	102	NFC Reader
624	8	102	Turnstile
625	5	254	Card Reader
626	5	254	Barcode Scanner
627	5	254	Gate Access
628	3	298	NFC Reader
629	3	298	Fingerprint Scanner
630	9	240	Mobile App Scanner
631	9	240	Facial Recognition
632	9	240	Turnstile
633	8	228	Mobile App Scanner
634	8	228	Fingerprint Scanner
635	8	228	Turnstile
636	9	66	Gate Access
637	9	66	Card Reader
638	9	66	Keypad Access
639	4	259	Fingerprint Scanner
640	4	259	Gate Access
641	4	259	QR Code Scanner
642	1	210	Barcode Scanner
643	1	210	Barcode Scanner
644	1	210	QR Code Scanner
645	8	297	Card Reader
646	8	297	Gate Access
647	8	297	Fingerprint Scanner
648	6	393	Mobile App Scanner
649	6	393	QR Code Scanner
650	3	272	Fingerprint Scanner
651	3	272	QR Code Scanner
652	9	72	NFC Reader
653	9	72	Gate Access
654	9	72	QR Code Scanner
655	2	132	Mobile App Scanner
656	2	132	Card Reader
657	8	157	Card Reader
658	8	157	QR Code Scanner
659	8	157	Keypad Access
660	4	376	Card Reader
661	4	376	Keypad Access
662	4	376	Mobile App Scanner
663	10	149	QR Code Scanner
664	10	149	Card Reader
665	10	149	QR Code Scanner
666	8	271	Barcode Scanner
667	8	271	Fingerprint Scanner
668	8	271	Turnstile
669	8	187	Turnstile
670	8	187	Card Reader
671	8	366	Card Reader
672	8	366	QR Code Scanner
673	2	232	Turnstile
674	2	232	Mobile App Scanner
675	2	232	Mobile App Scanner
676	3	24	NFC Reader
677	3	24	Card Reader
678	6	202	QR Code Scanner
679	6	202	Fingerprint Scanner
680	6	202	Mobile App Scanner
681	10	321	Mobile App Scanner
682	10	321	Barcode Scanner
683	10	321	Keypad Access
684	4	238	Fingerprint Scanner
685	4	238	Facial Recognition
686	4	170	Turnstile
687	4	170	Card Reader
688	3	221	Keypad Access
689	3	221	Barcode Scanner
690	7	216	Mobile App Scanner
691	7	216	Card Reader
692	8	38	Turnstile
693	8	38	Fingerprint Scanner
694	2	168	NFC Reader
695	2	168	QR Code Scanner
696	2	168	Mobile App Scanner
697	5	253	Card Reader
698	5	253	QR Code Scanner
699	7	26	QR Code Scanner
700	7	26	Facial Recognition
701	7	26	Facial Recognition
702	7	376	QR Code Scanner
703	7	376	Facial Recognition
704	7	376	Keypad Access
705	1	29	Card Reader
706	1	29	Turnstile
707	1	29	Fingerprint Scanner
708	10	388	Barcode Scanner
709	10	388	Facial Recognition
710	1	224	Barcode Scanner
711	1	224	Fingerprint Scanner
712	4	339	Facial Recognition
713	4	339	Gate Access
714	1	7	Facial Recognition
715	1	7	Barcode Scanner
716	6	350	Keypad Access
717	6	350	Fingerprint Scanner
718	5	266	Turnstile
719	5	266	Keypad Access
720	2	314	QR Code Scanner
721	2	314	Barcode Scanner
722	2	314	Fingerprint Scanner
723	5	34	Gate Access
724	5	34	Mobile App Scanner
725	5	148	Mobile App Scanner
726	5	148	QR Code Scanner
727	5	148	Facial Recognition
728	4	53	Facial Recognition
729	4	53	NFC Reader
730	4	53	NFC Reader
731	1	235	Mobile App Scanner
732	1	235	QR Code Scanner
733	1	235	NFC Reader
734	7	1	Fingerprint Scanner
735	7	1	Keypad Access
736	10	392	Keypad Access
737	10	392	Mobile App Scanner
738	5	100	QR Code Scanner
739	5	100	Facial Recognition
740	5	100	Fingerprint Scanner
741	1	334	Turnstile
742	1	334	Keypad Access
743	5	105	Mobile App Scanner
744	5	105	Facial Recognition
745	5	105	Fingerprint Scanner
746	1	128	QR Code Scanner
747	1	128	Barcode Scanner
748	3	33	Keypad Access
749	3	33	Mobile App Scanner
750	7	171	Mobile App Scanner
751	7	171	QR Code Scanner
752	7	171	Fingerprint Scanner
753	8	238	Gate Access
754	8	238	Turnstile
755	8	238	Fingerprint Scanner
756	1	251	Keypad Access
757	1	251	QR Code Scanner
758	1	251	Mobile App Scanner
759	10	247	Keypad Access
760	10	247	Card Reader
761	10	247	NFC Reader
762	8	287	Facial Recognition
763	8	287	Facial Recognition
764	8	287	Gate Access
765	6	55	Keypad Access
766	6	55	Card Reader
767	1	203	QR Code Scanner
768	1	203	Fingerprint Scanner
769	9	62	Keypad Access
770	9	62	Gate Access
771	2	321	NFC Reader
772	2	321	Mobile App Scanner
773	2	321	Keypad Access
774	6	129	Keypad Access
775	6	129	Mobile App Scanner
776	6	300	Gate Access
777	6	300	Keypad Access
778	9	119	Fingerprint Scanner
779	9	119	Mobile App Scanner
780	3	148	Mobile App Scanner
781	3	148	Keypad Access
782	6	113	QR Code Scanner
783	6	113	QR Code Scanner
784	5	86	NFC Reader
785	5	86	NFC Reader
786	5	86	Mobile App Scanner
787	2	387	Mobile App Scanner
788	2	387	QR Code Scanner
789	2	387	Barcode Scanner
790	2	163	QR Code Scanner
791	2	163	Turnstile
792	1	139	NFC Reader
793	1	139	Mobile App Scanner
794	1	139	Gate Access
795	6	5	Barcode Scanner
796	6	5	Card Reader
797	6	5	NFC Reader
798	2	377	Fingerprint Scanner
799	2	377	QR Code Scanner
800	7	375	NFC Reader
801	7	375	Facial Recognition
802	4	188	Card Reader
803	4	188	Turnstile
804	10	240	QR Code Scanner
805	10	240	QR Code Scanner
806	7	86	Mobile App Scanner
807	7	86	Gate Access
808	7	86	Card Reader
809	3	119	Gate Access
810	3	119	QR Code Scanner
811	3	119	NFC Reader
812	4	137	Turnstile
813	4	137	Mobile App Scanner
814	4	137	Gate Access
815	8	328	Gate Access
816	8	328	Turnstile
817	8	328	Barcode Scanner
818	8	78	Facial Recognition
819	8	78	Turnstile
820	10	60	Keypad Access
821	10	60	Keypad Access
822	10	60	Turnstile
823	6	109	Keypad Access
824	6	109	Mobile App Scanner
825	4	399	Barcode Scanner
826	4	399	Mobile App Scanner
827	8	30	Turnstile
828	8	30	Keypad Access
829	3	192	Turnstile
830	3	192	Keypad Access
831	10	111	Card Reader
832	10	111	Barcode Scanner
833	9	327	Mobile App Scanner
834	9	327	Gate Access
835	8	322	Gate Access
836	8	322	NFC Reader
837	6	27	Turnstile
838	6	27	QR Code Scanner
839	10	41	Turnstile
840	10	41	Gate Access
841	10	41	Keypad Access
842	7	19	Gate Access
843	7	19	Card Reader
844	3	257	Turnstile
845	3	257	QR Code Scanner
846	9	203	Card Reader
847	9	203	NFC Reader
848	10	395	Gate Access
849	10	395	Mobile App Scanner
850	1	2	Facial Recognition
851	1	2	Barcode Scanner
852	1	2	Turnstile
853	2	54	Facial Recognition
854	2	54	NFC Reader
855	2	206	Barcode Scanner
856	2	206	Facial Recognition
857	9	188	Barcode Scanner
858	9	188	NFC Reader
859	3	178	Card Reader
860	3	178	Keypad Access
861	7	109	QR Code Scanner
862	7	109	Turnstile
863	7	109	Fingerprint Scanner
864	8	283	Keypad Access
865	8	283	QR Code Scanner
866	6	387	Gate Access
867	6	387	Card Reader
868	9	48	QR Code Scanner
869	9	48	Keypad Access
870	9	48	QR Code Scanner
871	6	115	Mobile App Scanner
872	6	115	Turnstile
873	6	115	Turnstile
874	4	257	Mobile App Scanner
875	4	257	Mobile App Scanner
876	4	257	Barcode Scanner
877	1	71	Mobile App Scanner
878	1	71	Card Reader
879	1	71	Barcode Scanner
880	7	12	Fingerprint Scanner
881	7	12	Mobile App Scanner
882	10	101	Gate Access
883	10	101	Mobile App Scanner
884	5	212	Mobile App Scanner
885	5	212	QR Code Scanner
886	5	212	Fingerprint Scanner
887	3	364	Keypad Access
888	3	364	Gate Access
889	10	204	QR Code Scanner
890	10	204	QR Code Scanner
891	10	204	NFC Reader
892	7	258	Fingerprint Scanner
893	7	258	Turnstile
894	7	258	Gate Access
895	7	96	Fingerprint Scanner
896	7	96	NFC Reader
897	8	62	Keypad Access
898	8	62	Turnstile
899	5	32	Mobile App Scanner
900	5	32	Facial Recognition
901	5	32	Turnstile
902	1	307	Gate Access
903	1	307	Keypad Access
904	2	239	Turnstile
905	2	239	Gate Access
906	2	239	Facial Recognition
907	1	79	Barcode Scanner
908	1	79	Facial Recognition
909	10	143	Card Reader
910	10	143	Fingerprint Scanner
911	10	143	Keypad Access
912	10	191	QR Code Scanner
913	10	191	Keypad Access
914	10	191	Card Reader
915	7	371	Barcode Scanner
916	7	371	Turnstile
917	9	37	NFC Reader
918	9	37	Turnstile
919	9	37	Barcode Scanner
920	1	24	Facial Recognition
921	1	24	NFC Reader
922	7	77	NFC Reader
923	7	77	Barcode Scanner
924	7	77	Keypad Access
925	7	330	NFC Reader
926	7	330	Gate Access
927	7	330	NFC Reader
928	6	203	Keypad Access
929	6	203	Keypad Access
930	6	203	NFC Reader
931	8	204	NFC Reader
932	8	204	Barcode Scanner
933	9	117	Keypad Access
934	9	117	QR Code Scanner
935	5	239	Turnstile
936	5	239	Mobile App Scanner
937	7	64	Fingerprint Scanner
938	7	64	NFC Reader
939	7	64	NFC Reader
940	9	243	Barcode Scanner
941	9	243	Facial Recognition
942	1	170	Card Reader
943	1	170	Turnstile
944	1	170	Mobile App Scanner
945	4	184	Turnstile
946	4	184	Barcode Scanner
947	3	386	QR Code Scanner
948	3	386	Keypad Access
949	3	386	Gate Access
950	10	316	QR Code Scanner
951	10	316	Card Reader
952	5	391	Keypad Access
953	5	391	NFC Reader
954	5	391	Card Reader
955	10	359	Facial Recognition
956	10	359	Barcode Scanner
957	2	271	QR Code Scanner
958	2	271	Fingerprint Scanner
959	7	351	Turnstile
960	7	351	Keypad Access
961	4	82	Facial Recognition
962	4	82	Keypad Access
963	5	28	Facial Recognition
964	5	28	Turnstile
965	3	398	Facial Recognition
966	3	398	Barcode Scanner
967	3	398	Turnstile
968	7	378	Mobile App Scanner
969	7	378	NFC Reader
970	7	378	Barcode Scanner
971	8	72	NFC Reader
972	8	72	Barcode Scanner
973	8	72	Facial Recognition
974	7	85	Mobile App Scanner
975	7	85	Keypad Access
976	7	85	Card Reader
977	4	2	Turnstile
978	4	2	Mobile App Scanner
979	5	295	Mobile App Scanner
980	5	295	Card Reader
981	10	54	Fingerprint Scanner
982	10	54	Keypad Access
983	10	100	Fingerprint Scanner
984	10	100	Fingerprint Scanner
985	10	100	Keypad Access
986	9	79	Facial Recognition
987	9	79	QR Code Scanner
988	9	264	Keypad Access
989	9	264	Fingerprint Scanner
990	9	264	Mobile App Scanner
991	1	320	Turnstile
992	1	320	Facial Recognition
993	1	320	Turnstile
994	6	383	Turnstile
995	6	383	NFC Reader
996	4	320	Turnstile
997	4	320	Fingerprint Scanner
998	4	320	Keypad Access
999	3	238	QR Code Scanner
1000	3	238	Barcode Scanner
1001	3	238	Fingerprint Scanner
1002	9	266	QR Code Scanner
1003	9	266	Card Reader
1004	9	266	QR Code Scanner
1005	8	301	Barcode Scanner
1006	8	301	QR Code Scanner
1007	6	378	Keypad Access
1008	6	378	NFC Reader
1009	10	315	NFC Reader
1010	10	315	Keypad Access
1011	10	315	QR Code Scanner
1012	4	375	Gate Access
1013	4	375	Mobile App Scanner
1014	10	374	Keypad Access
1015	10	374	Fingerprint Scanner
1016	6	21	Fingerprint Scanner
1017	6	21	Barcode Scanner
1018	6	21	Card Reader
1019	1	150	Fingerprint Scanner
1020	1	150	Keypad Access
1021	10	37	Card Reader
1022	10	37	Fingerprint Scanner
1023	10	37	NFC Reader
1024	5	61	Turnstile
1025	5	61	Facial Recognition
1026	5	61	Card Reader
1027	5	165	Barcode Scanner
1028	5	165	Mobile App Scanner
1029	7	366	Fingerprint Scanner
1030	7	366	Gate Access
1031	7	366	Gate Access
1032	6	271	Card Reader
1033	6	271	Mobile App Scanner
1034	8	36	Card Reader
1035	8	36	QR Code Scanner
1036	8	36	Mobile App Scanner
1037	7	327	Facial Recognition
1038	7	327	NFC Reader
1039	10	131	Keypad Access
1040	10	131	QR Code Scanner
1041	9	299	Card Reader
1042	9	299	Gate Access
1043	9	299	Fingerprint Scanner
1044	1	216	Card Reader
1045	1	216	Card Reader
1046	1	216	Barcode Scanner
1047	1	49	Fingerprint Scanner
1048	1	49	Barcode Scanner
1049	1	49	Facial Recognition
1050	3	379	QR Code Scanner
1051	3	379	Facial Recognition
1052	3	379	Barcode Scanner
1053	1	178	Card Reader
1054	1	178	Barcode Scanner
1055	3	177	QR Code Scanner
1056	3	177	Turnstile
1057	9	276	Gate Access
1058	9	276	Gate Access
1059	9	122	QR Code Scanner
1060	9	122	Fingerprint Scanner
1061	9	122	QR Code Scanner
1062	5	374	Mobile App Scanner
1063	5	374	QR Code Scanner
1064	8	213	QR Code Scanner
1065	8	213	QR Code Scanner
1066	10	218	Fingerprint Scanner
1067	10	218	NFC Reader
1068	5	331	Keypad Access
1069	5	331	Facial Recognition
1070	6	272	Gate Access
1071	6	272	Card Reader
1072	6	272	Mobile App Scanner
1073	9	170	Fingerprint Scanner
1074	9	170	QR Code Scanner
1075	9	170	QR Code Scanner
1076	6	264	NFC Reader
1077	6	264	Gate Access
1078	4	255	NFC Reader
1079	4	255	Mobile App Scanner
1080	1	70	Turnstile
1081	1	70	Turnstile
1082	4	237	Barcode Scanner
1083	4	237	Mobile App Scanner
1084	4	237	Gate Access
1085	6	187	Keypad Access
1086	6	187	Turnstile
1087	7	120	Card Reader
1088	7	120	Card Reader
1089	3	37	Fingerprint Scanner
1090	3	37	Facial Recognition
1091	9	241	NFC Reader
1092	9	241	Mobile App Scanner
1093	6	143	Card Reader
1094	6	143	Card Reader
1095	6	143	Mobile App Scanner
1096	4	86	NFC Reader
1097	4	86	NFC Reader
1098	9	357	Facial Recognition
1099	9	357	NFC Reader
1100	7	51	Keypad Access
1101	7	51	NFC Reader
1102	7	51	Card Reader
1103	4	234	Turnstile
1104	4	234	Facial Recognition
1105	7	256	Barcode Scanner
1106	7	256	Mobile App Scanner
1107	7	256	Turnstile
1108	8	115	Fingerprint Scanner
1109	8	115	Facial Recognition
1110	8	115	Facial Recognition
1111	2	320	Card Reader
1112	2	320	Facial Recognition
1113	2	320	NFC Reader
1114	9	196	Mobile App Scanner
1115	9	196	Turnstile
1116	2	317	Card Reader
1117	2	317	Mobile App Scanner
1118	2	317	Facial Recognition
1119	6	26	Gate Access
1120	6	26	QR Code Scanner
1121	3	215	Mobile App Scanner
1122	3	215	Turnstile
1123	5	396	Turnstile
1124	5	396	Barcode Scanner
1125	5	396	QR Code Scanner
1126	9	263	Turnstile
1127	9	263	QR Code Scanner
1128	10	356	Fingerprint Scanner
1129	10	356	Facial Recognition
1130	8	125	Card Reader
1131	8	125	Turnstile
1132	8	125	Gate Access
1133	7	368	Card Reader
1134	7	368	Barcode Scanner
1135	9	372	QR Code Scanner
1136	9	372	Facial Recognition
1137	9	372	Fingerprint Scanner
1138	9	189	Mobile App Scanner
1139	9	189	NFC Reader
1140	9	189	Fingerprint Scanner
1141	8	140	NFC Reader
1142	8	140	Turnstile
1143	6	277	Barcode Scanner
1144	6	277	Card Reader
1145	6	277	Fingerprint Scanner
1146	10	4	NFC Reader
1147	10	4	Mobile App Scanner
1148	6	330	Mobile App Scanner
1149	6	330	Gate Access
1150	8	51	Card Reader
1151	8	51	QR Code Scanner
1152	2	101	Mobile App Scanner
1153	2	101	NFC Reader
1154	2	101	NFC Reader
1155	8	67	Fingerprint Scanner
1156	8	67	Barcode Scanner
1157	8	67	QR Code Scanner
1158	4	135	Keypad Access
1159	4	135	Turnstile
1160	5	373	Card Reader
1161	5	373	Barcode Scanner
1162	5	373	Gate Access
1163	7	391	QR Code Scanner
1164	7	391	Keypad Access
1165	7	391	QR Code Scanner
1166	3	269	Barcode Scanner
1167	3	269	NFC Reader
1168	1	264	Card Reader
1169	1	264	Keypad Access
1170	1	264	Barcode Scanner
1171	8	229	Barcode Scanner
1172	8	229	Gate Access
1173	5	102	Facial Recognition
1174	5	102	Fingerprint Scanner
1175	2	230	NFC Reader
1176	2	230	Gate Access
1177	2	230	Mobile App Scanner
1178	4	4	Keypad Access
1179	4	4	Card Reader
1180	8	388	QR Code Scanner
1181	8	388	Card Reader
1182	4	99	Barcode Scanner
1183	4	99	Keypad Access
1184	4	99	Mobile App Scanner
1185	2	178	Keypad Access
1186	2	178	Gate Access
1187	2	186	Gate Access
1188	2	186	Fingerprint Scanner
1189	2	186	Fingerprint Scanner
1190	9	109	Barcode Scanner
1191	9	109	Fingerprint Scanner
1192	9	109	Turnstile
1193	9	399	Fingerprint Scanner
1194	9	399	Barcode Scanner
1195	10	202	QR Code Scanner
1196	10	202	Fingerprint Scanner
1197	10	202	Card Reader
1198	2	185	Turnstile
1199	2	185	Turnstile
1200	2	389	Turnstile
1201	2	389	Facial Recognition
1202	2	389	NFC Reader
1203	9	116	Turnstile
1204	9	116	QR Code Scanner
1205	9	116	Mobile App Scanner
1206	10	309	Barcode Scanner
1207	10	309	QR Code Scanner
1208	7	159	QR Code Scanner
1209	7	159	QR Code Scanner
1210	7	282	QR Code Scanner
1211	7	282	Keypad Access
1212	7	282	Fingerprint Scanner
1213	3	136	Facial Recognition
1214	3	136	Fingerprint Scanner
1215	5	47	QR Code Scanner
1216	5	47	Turnstile
1217	5	47	Facial Recognition
1218	7	100	Keypad Access
1219	7	100	NFC Reader
1220	6	189	Gate Access
1221	6	189	NFC Reader
1222	6	189	Card Reader
1223	6	335	Facial Recognition
1224	6	335	Keypad Access
1225	6	335	Keypad Access
1226	5	304	Keypad Access
1227	5	304	QR Code Scanner
1228	3	315	QR Code Scanner
1229	3	315	Keypad Access
1230	3	315	Card Reader
1231	1	166	Fingerprint Scanner
1232	1	166	Fingerprint Scanner
1233	1	166	Barcode Scanner
1234	10	347	Turnstile
1235	10	347	NFC Reader
1236	10	347	Barcode Scanner
1237	10	32	Fingerprint Scanner
1238	10	32	Mobile App Scanner
1239	10	32	Turnstile
1240	7	215	Card Reader
1241	7	215	Barcode Scanner
1242	7	215	NFC Reader
1243	3	98	Card Reader
1244	3	98	Card Reader
1245	3	98	QR Code Scanner
1246	1	243	Mobile App Scanner
1247	1	243	Turnstile
1248	9	10	Card Reader
1249	9	10	Gate Access
1250	9	10	NFC Reader
1251	6	373	Card Reader
1252	6	373	QR Code Scanner
1253	6	373	Barcode Scanner
1254	8	382	NFC Reader
1255	8	382	Gate Access
1256	8	23	QR Code Scanner
1257	8	23	Keypad Access
1258	8	23	NFC Reader
1259	3	354	Keypad Access
1260	3	354	QR Code Scanner
1261	7	182	QR Code Scanner
1262	7	182	NFC Reader
1263	6	178	NFC Reader
1264	6	178	Mobile App Scanner
1265	1	384	Gate Access
1266	1	384	QR Code Scanner
1267	7	265	Gate Access
1268	7	265	Mobile App Scanner
1269	7	265	Fingerprint Scanner
1270	7	80	NFC Reader
1271	7	80	QR Code Scanner
1272	5	164	Turnstile
1273	5	164	QR Code Scanner
1274	5	164	Facial Recognition
1275	10	368	Card Reader
1276	10	368	Facial Recognition
1277	10	368	Barcode Scanner
1278	3	139	Mobile App Scanner
1279	3	139	Barcode Scanner
1280	3	139	Facial Recognition
1281	9	284	QR Code Scanner
1282	9	284	QR Code Scanner
1283	9	284	NFC Reader
1284	1	147	Barcode Scanner
1285	1	147	Barcode Scanner
1286	1	147	Fingerprint Scanner
1287	7	399	Card Reader
1288	7	399	Keypad Access
1289	5	394	QR Code Scanner
1290	5	394	Card Reader
1291	5	394	QR Code Scanner
1292	5	381	Mobile App Scanner
1293	5	381	QR Code Scanner
1294	1	175	Barcode Scanner
1295	1	175	Fingerprint Scanner
1296	6	240	Barcode Scanner
1297	6	240	Mobile App Scanner
1298	6	240	NFC Reader
1299	4	168	Keypad Access
1300	4	168	Mobile App Scanner
1301	4	168	Turnstile
1302	2	87	Card Reader
1303	2	87	NFC Reader
1304	7	41	Keypad Access
1305	7	41	Fingerprint Scanner
1306	7	41	QR Code Scanner
1307	4	14	QR Code Scanner
1308	4	14	Gate Access
1309	1	262	Keypad Access
1310	1	262	Mobile App Scanner
1311	1	262	QR Code Scanner
1312	10	255	Mobile App Scanner
1313	10	255	Turnstile
1314	10	373	Mobile App Scanner
1315	10	373	Keypad Access
1316	10	373	Gate Access
1317	6	153	Fingerprint Scanner
1318	6	153	Keypad Access
1319	6	153	Keypad Access
1320	8	384	Facial Recognition
1321	8	384	Keypad Access
1322	8	193	QR Code Scanner
1323	8	193	Keypad Access
1324	8	193	Turnstile
1325	3	142	Card Reader
1326	3	142	Gate Access
1327	7	382	Barcode Scanner
1328	7	382	NFC Reader
1329	7	382	NFC Reader
1330	6	348	Mobile App Scanner
1331	6	348	Card Reader
1332	6	348	NFC Reader
1333	9	175	QR Code Scanner
1334	9	175	Mobile App Scanner
1335	9	175	Mobile App Scanner
1336	2	93	Turnstile
1337	2	93	Gate Access
1338	2	93	Card Reader
1339	8	398	QR Code Scanner
1340	8	398	NFC Reader
1341	2	6	Fingerprint Scanner
1342	2	6	Mobile App Scanner
1343	3	337	NFC Reader
1344	3	337	Keypad Access
1345	3	337	Turnstile
1346	10	12	Fingerprint Scanner
1347	10	12	Gate Access
1348	10	12	Mobile App Scanner
1349	7	329	Facial Recognition
1350	7	329	NFC Reader
1351	8	367	Turnstile
1352	8	367	QR Code Scanner
1353	4	309	Fingerprint Scanner
1354	4	309	QR Code Scanner
1355	9	28	QR Code Scanner
1356	9	28	Keypad Access
1357	1	156	NFC Reader
1358	1	156	QR Code Scanner
1359	1	156	Turnstile
1360	6	381	Card Reader
1361	6	381	Mobile App Scanner
1362	4	187	Fingerprint Scanner
1363	4	187	NFC Reader
1364	8	347	Barcode Scanner
1365	8	347	Barcode Scanner
1366	4	223	Card Reader
1367	4	223	Turnstile
1368	4	321	Keypad Access
1369	4	321	Barcode Scanner
1370	9	262	Keypad Access
1371	9	262	NFC Reader
1372	6	23	Gate Access
1373	6	23	Keypad Access
1374	4	148	Card Reader
1375	4	148	Gate Access
1376	1	256	Turnstile
1377	1	256	Barcode Scanner
1378	1	256	NFC Reader
1379	7	279	Gate Access
1380	7	279	Gate Access
1381	7	279	Gate Access
1382	4	262	Facial Recognition
1383	4	262	NFC Reader
1384	4	262	NFC Reader
1385	10	122	Gate Access
1386	10	122	Turnstile
1387	10	122	Facial Recognition
1388	7	289	Gate Access
1389	7	289	Mobile App Scanner
1390	7	289	Card Reader
1391	3	376	Turnstile
1392	3	376	Turnstile
1393	3	376	QR Code Scanner
1394	4	279	Keypad Access
1395	4	279	Keypad Access
1396	1	249	Keypad Access
1397	1	249	Turnstile
1398	1	249	QR Code Scanner
1399	7	247	Keypad Access
1400	7	247	Gate Access
1401	8	358	Barcode Scanner
1402	8	358	Gate Access
1403	5	136	NFC Reader
1404	5	136	Keypad Access
1405	5	136	Facial Recognition
1406	8	92	Facial Recognition
1407	8	92	QR Code Scanner
1408	8	92	Facial Recognition
1409	9	224	Fingerprint Scanner
1410	9	224	Keypad Access
1411	8	377	QR Code Scanner
1412	8	377	Mobile App Scanner
1413	8	377	Fingerprint Scanner
1414	3	155	Gate Access
1415	3	155	QR Code Scanner
1416	3	399	Turnstile
1417	3	399	Gate Access
1418	6	184	Turnstile
1419	6	184	Turnstile
1420	6	184	Mobile App Scanner
1421	1	95	NFC Reader
1422	1	95	QR Code Scanner
1423	6	389	Facial Recognition
1424	6	389	Gate Access
1425	4	29	Card Reader
1426	4	29	NFC Reader
1427	5	343	Fingerprint Scanner
1428	5	343	NFC Reader
1429	4	169	Keypad Access
1430	4	169	Keypad Access
1431	4	149	QR Code Scanner
1432	4	149	Card Reader
1433	7	44	Card Reader
1434	7	44	Keypad Access
1435	5	146	Fingerprint Scanner
1436	5	146	QR Code Scanner
1437	1	184	Barcode Scanner
1438	1	184	Gate Access
1439	2	108	Turnstile
1440	2	108	Barcode Scanner
1441	7	52	Card Reader
1442	7	52	Gate Access
1443	7	52	Card Reader
1444	3	43	Keypad Access
1445	3	43	Facial Recognition
1446	8	189	Keypad Access
1447	8	189	Turnstile
1448	8	189	Turnstile
1449	7	336	Gate Access
1450	7	336	Keypad Access
1451	7	336	Fingerprint Scanner
1452	2	159	Card Reader
1453	2	159	Gate Access
1454	6	285	Keypad Access
1455	6	285	Keypad Access
1456	6	285	NFC Reader
1457	2	216	NFC Reader
1458	2	216	Mobile App Scanner
1459	2	216	QR Code Scanner
1460	9	77	Fingerprint Scanner
1461	9	77	Keypad Access
1462	6	176	Barcode Scanner
1463	6	176	Barcode Scanner
1464	6	176	NFC Reader
1465	3	328	Gate Access
1466	3	328	Gate Access
1467	3	328	Gate Access
1468	6	341	Fingerprint Scanner
1469	6	341	Fingerprint Scanner
1470	6	341	NFC Reader
1471	10	174	NFC Reader
1472	10	174	Mobile App Scanner
1473	10	174	Keypad Access
1474	8	24	Keypad Access
1475	8	24	Barcode Scanner
1476	2	354	Keypad Access
1477	2	354	Gate Access
1478	2	354	Gate Access
1479	10	68	Turnstile
1480	10	68	NFC Reader
1481	10	68	Keypad Access
1482	4	123	QR Code Scanner
1483	4	123	NFC Reader
1484	4	123	Mobile App Scanner
1485	1	10	Facial Recognition
1486	1	10	Fingerprint Scanner
\.


--
-- TOC entry 3444 (class 0 OID 16758)
-- Dependencies: 225
-- Data for Name: entry record; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public."entry record" ("personID", "deviceID", "zoneID", "gymID", "entryTime") FROM stdin;
790	788	2	387	2024-11-05 05:53:40
686	1103	4	234	2024-10-23 23:00:48
81	505	10	355	2024-04-26 03:15:26
290	1162	5	373	2024-12-31 04:09:32
124	367	1	14	2024-12-03 03:21:10
67	167	3	170	2024-07-07 02:47:13
250	998	4	320	2024-04-25 23:09:08
598	1042	9	299	2024-07-18 20:33:08
83	1266	1	384	2024-06-04 11:18:29
392	82	4	292	2024-11-24 15:22:48
274	1223	6	335	2025-04-01 13:18:24
74	290	8	184	2024-07-10 22:27:16
145	370	9	39	2024-05-05 22:10:43
124	845	3	257	2024-09-19 10:02:44
202	721	2	314	2024-09-27 09:47:56
139	1007	6	378	2024-05-22 18:39:11
6	545	7	198	2024-12-25 09:51:54
6	1367	4	223	2025-03-15 13:23:20
120	559	10	150	2024-06-19 13:41:39
537	1441	7	52	2024-12-20 13:44:14
276	428	6	379	2024-06-08 21:52:49
36	515	6	363	2024-05-19 10:20:37
501	98	1	242	2024-04-12 02:25:55
147	221	5	224	2025-02-20 13:52:31
578	619	10	27	2025-01-12 14:05:11
203	330	7	92	2025-02-10 22:14:21
245	158	3	211	2024-04-29 09:22:15
32	815	8	328	2024-08-02 00:04:39
119	928	6	203	2024-09-15 06:31:08
199	488	4	146	2025-03-28 13:34:57
118	598	1	197	2025-02-26 10:14:35
276	578	7	312	2024-07-22 08:24:51
363	738	5	100	2024-11-21 23:35:44
236	864	8	283	2025-03-15 20:15:02
141	322	8	313	2024-05-20 13:01:58
370	68	2	90	2025-02-07 05:56:49
128	1189	2	186	2024-10-01 14:29:40
788	972	8	72	2024-09-18 02:15:39
284	1224	6	335	2024-12-11 11:16:40
155	89	5	44	2024-11-14 23:59:25
573	212	10	50	2024-10-13 05:08:00
550	1205	9	116	2024-12-11 15:45:12
247	900	5	32	2024-08-01 07:27:01
98	1412	8	377	2024-05-21 14:52:32
223	265	3	253	2025-02-17 11:12:52
161	1236	10	347	2024-12-26 05:35:28
224	1097	4	86	2025-03-15 15:56:54
772	1451	7	336	2024-07-21 22:10:28
10	54	2	209	2024-06-16 00:37:06
469	267	3	17	2024-10-06 15:20:55
60	505	10	355	2024-08-12 00:31:13
156	884	5	212	2024-12-28 23:36:49
203	1381	7	279	2025-04-02 15:01:59
208	176	2	51	2024-04-17 10:36:31
242	489	4	101	2024-06-30 05:35:53
8	1059	9	122	2024-07-29 19:16:34
125	39	2	397	2025-02-20 12:32:54
223	449	7	347	2024-07-02 22:14:54
718	354	6	297	2024-10-29 00:51:29
2	1022	10	37	2024-08-22 09:42:31
268	580	9	41	2024-07-11 12:26:29
46	1385	10	122	2024-05-30 18:27:27
207	340	8	380	2024-05-21 05:41:49
485	1203	9	116	2024-06-06 23:45:44
670	8	5	250	2025-01-02 21:24:30
462	1001	3	238	2025-03-20 23:54:51
155	991	1	320	2024-12-08 21:58:49
14	1438	1	184	2024-11-05 02:49:19
585	251	1	257	2024-09-29 13:01:36
331	569	6	163	2025-01-23 14:59:49
343	335	6	1	2024-08-28 14:17:45
233	989	9	264	2024-07-03 11:06:00
67	309	6	352	2024-10-24 17:22:05
522	7	5	250	2024-05-03 08:02:31
196	1018	6	21	2024-05-04 13:05:03
393	150	1	19	2024-06-20 21:02:01
80	924	7	77	2025-03-06 05:14:33
317	1092	9	241	2024-11-18 01:52:50
709	1315	10	373	2025-01-23 13:26:24
359	602	2	204	2024-05-31 22:08:51
663	841	10	41	2024-08-06 01:44:29
711	1149	6	330	2024-05-17 14:55:49
625	533	5	312	2024-04-15 07:37:07
376	1080	1	70	2024-09-25 01:36:32
261	1387	10	122	2024-07-22 00:40:14
650	612	1	228	2024-10-19 12:44:48
227	364	6	76	2024-07-26 10:44:12
232	949	3	386	2024-05-30 19:18:20
109	202	4	49	2024-10-10 10:44:20
385	598	1	197	2024-05-25 11:10:47
354	405	2	361	2024-07-30 10:15:50
569	1282	9	284	2024-07-09 02:07:35
371	323	8	386	2025-02-15 12:21:26
64	1327	7	382	2024-10-08 09:11:11
332	287	1	16	2025-01-08 18:30:30
492	763	8	287	2025-02-22 20:01:22
537	839	10	41	2024-12-16 15:33:01
713	311	5	339	2024-04-21 10:39:21
17	1258	8	23	2024-10-29 05:30:55
441	1325	3	142	2024-04-03 02:18:12
672	1272	5	164	2024-07-25 11:52:44
799	72	8	394	2024-10-09 07:26:23
91	668	8	271	2024-04-05 02:15:37
553	264	3	253	2024-12-30 22:43:35
27	1444	3	43	2024-10-30 08:12:47
99	463	9	60	2025-01-16 15:09:18
70	1459	2	216	2025-01-17 14:04:56
210	1435	5	146	2024-11-16 09:59:44
569	93	5	340	2025-03-06 04:04:48
704	896	7	96	2024-06-30 23:25:26
285	1075	9	170	2025-01-08 02:10:52
155	535	5	312	2024-04-03 02:33:58
125	933	9	117	2024-05-11 00:04:35
475	287	1	16	2024-09-04 06:39:43
134	71	8	394	2024-11-01 07:43:35
604	1332	6	348	2024-09-11 03:45:47
58	1458	2	216	2025-01-30 13:15:02
51	443	4	288	2024-12-27 09:35:19
92	535	5	312	2024-11-02 13:24:25
44	856	2	206	2024-09-25 10:55:02
547	1061	9	122	2024-04-22 14:35:55
235	916	7	371	2024-07-21 07:44:16
162	684	4	238	2024-05-23 17:34:57
83	1343	3	337	2024-06-01 00:09:54
427	18	8	194	2024-04-09 05:29:10
620	1245	3	98	2024-08-02 09:31:44
266	801	7	375	2024-11-04 00:46:12
81	1163	7	391	2025-01-03 12:08:21
353	1411	8	377	2024-12-28 10:17:43
13	860	3	178	2024-11-15 18:36:31
736	845	3	257	2025-01-21 11:57:25
490	659	8	157	2025-02-06 04:51:17
689	253	7	165	2024-06-20 06:56:18
223	136	2	32	2024-04-04 04:14:20
334	434	10	329	2025-02-16 02:21:04
263	74	6	32	2024-07-04 00:40:15
257	1042	9	299	2024-11-27 20:58:01
127	474	5	144	2024-07-17 06:08:09
629	1002	9	266	2025-03-21 18:09:25
666	406	2	361	2024-11-07 18:50:56
231	12	4	284	2024-10-11 12:44:37
127	1097	4	86	2024-07-11 11:14:52
683	313	6	155	2024-08-14 09:27:12
629	115	7	144	2025-02-05 01:33:56
127	1302	2	87	2024-07-26 09:31:37
789	1181	8	388	2024-09-19 11:19:53
651	301	9	209	2024-06-17 20:01:31
175	1437	1	184	2025-02-27 21:07:40
208	157	3	211	2025-02-17 11:31:58
783	89	5	44	2024-10-22 21:19:55
137	125	10	166	2024-04-30 12:21:40
457	1291	5	394	2025-04-01 17:51:08
127	462	9	60	2024-04-16 20:44:57
61	115	7	144	2024-06-02 10:48:49
561	727	5	148	2024-09-04 20:33:33
258	965	3	398	2024-10-14 02:47:52
760	520	7	186	2025-01-18 15:16:11
396	649	6	393	2024-05-15 02:08:52
275	674	2	232	2025-02-03 10:56:03
64	1023	10	37	2024-11-22 21:01:41
446	1038	7	327	2024-05-21 07:09:49
170	649	6	393	2025-03-26 13:50:55
51	1016	6	21	2024-12-28 19:04:13
553	1199	2	185	2024-08-26 09:27:08
312	290	8	184	2025-03-16 05:30:13
161	1323	8	193	2024-10-27 05:00:53
116	313	6	155	2025-01-17 18:16:21
125	918	9	37	2024-07-22 06:12:46
105	1334	9	175	2024-10-04 08:42:24
118	610	5	41	2024-07-16 07:36:10
28	566	7	43	2025-01-20 04:19:30
9	1036	8	36	2024-08-05 10:20:36
80	1039	10	131	2025-03-07 13:02:45
286	1314	10	373	2025-01-06 14:53:15
14	915	7	371	2024-05-17 10:18:32
342	1268	7	265	2024-06-03 14:53:01
408	656	2	132	2024-08-17 21:30:25
261	125	10	166	2024-09-05 05:50:23
59	320	8	313	2024-11-03 20:43:54
108	802	4	188	2024-06-24 08:04:59
286	911	10	143	2024-08-11 03:24:46
152	209	4	62	2024-06-28 15:37:34
193	502	10	16	2025-03-16 02:58:22
11	818	8	78	2024-08-26 18:40:52
201	720	2	314	2024-08-04 16:28:46
292	60	6	288	2024-11-15 01:34:21
300	1090	3	37	2024-05-09 17:29:28
715	463	9	60	2024-09-08 13:07:32
297	802	4	188	2024-12-28 11:01:25
82	1004	9	266	2024-12-11 04:26:18
72	1297	6	240	2025-03-19 10:52:23
650	442	4	288	2025-01-11 11:52:26
791	406	2	361	2025-02-26 12:14:38
48	738	5	100	2025-03-19 14:47:15
15	626	5	254	2025-03-23 01:41:27
220	1308	4	14	2025-03-22 10:47:23
517	739	5	100	2024-12-27 12:46:21
366	1300	4	168	2024-12-10 08:36:10
469	826	4	399	2025-02-20 20:41:43
167	994	6	383	2024-09-29 18:03:56
214	840	10	41	2025-02-26 13:13:28
716	781	3	148	2024-07-25 22:17:21
389	1419	6	184	2024-05-15 20:48:59
140	1043	9	299	2024-06-14 15:14:39
667	1369	4	321	2024-09-08 11:16:13
411	1477	2	354	2024-07-08 15:20:26
699	343	5	35	2024-11-02 03:11:43
786	800	7	375	2024-09-19 01:49:21
23	567	2	171	2024-11-26 21:31:34
757	984	10	100	2024-05-27 14:34:29
122	325	7	346	2025-03-11 13:24:11
371	695	2	168	2024-07-13 18:32:11
28	142	5	379	2024-07-20 04:48:43
91	1043	9	299	2024-08-27 13:46:45
112	1036	8	36	2024-10-31 06:46:53
360	403	9	90	2024-11-12 18:16:23
239	740	5	100	2025-02-07 16:20:55
322	227	2	134	2024-05-16 18:21:46
28	1084	4	237	2024-04-16 04:41:36
282	1343	3	337	2024-12-07 05:10:44
251	729	4	53	2024-05-29 05:16:59
54	1136	9	372	2024-07-02 08:22:28
320	103	8	178	2024-07-18 11:36:55
321	210	10	50	2024-12-10 15:25:58
690	1462	6	176	2024-09-16 05:27:36
138	144	5	379	2024-07-28 15:58:10
571	990	9	264	2025-02-06 14:54:03
329	373	7	293	2024-04-20 21:22:27
190	276	2	14	2024-09-02 23:01:17
358	1330	6	348	2024-04-04 08:19:02
66	834	9	327	2024-11-07 03:12:09
190	787	2	387	2024-08-08 05:23:44
8	1407	8	92	2024-12-16 11:42:31
53	583	2	338	2024-04-24 05:03:17
270	308	6	352	2024-04-03 06:08:40
52	1185	2	178	2024-12-25 04:42:54
109	478	4	163	2024-04-19 09:25:45
305	645	8	297	2025-01-19 10:53:02
82	678	6	202	2024-05-20 20:27:20
285	1283	9	284	2024-11-12 05:43:08
398	9	5	186	2025-03-22 20:03:25
375	666	8	271	2024-12-11 16:47:50
65	1016	6	21	2024-09-13 12:25:15
258	720	2	314	2024-10-27 04:43:33
246	1031	7	366	2025-02-16 23:30:18
375	1073	9	170	2025-02-17 07:05:45
222	1154	2	101	2025-03-06 07:49:16
160	1052	3	379	2025-01-18 05:21:37
658	902	1	307	2024-10-01 15:15:27
281	1128	10	356	2024-07-06 18:23:21
505	744	5	105	2024-12-11 23:41:28
306	572	1	270	2024-12-29 18:30:48
250	584	3	384	2024-10-20 10:05:56
288	1467	3	328	2024-05-21 08:20:22
349	398	5	90	2024-08-07 16:30:42
472	633	8	228	2024-09-03 02:57:36
153	328	5	279	2024-08-29 19:56:52
707	641	4	259	2024-04-08 08:38:00
644	49	5	288	2024-08-20 03:37:11
487	1335	9	175	2024-10-06 01:23:07
275	111	6	397	2024-06-27 23:59:59
45	785	5	86	2024-11-23 00:06:40
747	397	6	340	2025-01-02 08:47:04
538	686	4	170	2024-05-23 04:09:54
19	1320	8	384	2025-02-12 02:00:27
792	1168	1	264	2025-03-15 09:56:34
333	959	7	351	2024-06-21 12:41:50
274	7	5	250	2025-01-17 09:11:19
504	436	10	329	2025-03-10 14:40:49
108	695	2	168	2024-09-11 13:40:13
387	777	6	300	2025-02-09 19:53:47
83	1117	2	317	2025-02-15 12:12:16
373	1255	8	382	2025-02-24 00:33:31
34	751	7	171	2024-11-03 02:23:27
342	1082	4	237	2024-11-30 05:54:39
189	467	5	189	2025-02-06 23:05:47
218	239	10	299	2025-03-16 04:32:01
64	1398	1	249	2024-05-23 20:38:45
347	281	8	350	2024-04-07 15:09:58
295	291	8	184	2024-12-31 13:08:37
368	340	8	380	2024-08-27 08:51:52
720	1249	9	10	2024-09-18 08:09:11
365	163	1	158	2024-05-04 08:42:57
641	1101	7	51	2025-02-11 12:15:43
354	657	8	157	2024-09-04 20:54:34
281	1467	3	328	2024-09-22 13:31:29
398	677	3	24	2025-02-12 11:41:21
41	546	7	198	2024-09-15 05:03:31
113	191	8	169	2024-08-14 06:44:21
560	683	10	321	2024-10-20 23:36:11
366	1055	3	177	2024-04-02 15:57:35
539	1110	8	115	2024-10-06 23:54:32
383	1480	10	68	2024-05-10 12:52:22
616	1017	6	21	2025-02-10 07:20:54
151	447	3	171	2025-03-15 06:48:05
786	1060	9	122	2024-11-11 22:12:20
245	589	10	312	2024-12-09 10:23:31
338	695	2	168	2024-11-08 18:26:10
101	836	8	322	2024-08-11 16:05:09
479	163	1	158	2025-02-08 16:18:23
161	614	9	156	2024-05-02 04:30:06
197	1049	1	49	2024-08-06 21:09:46
393	1033	6	271	2025-01-06 09:06:54
66	415	8	6	2024-04-21 04:02:15
279	1423	6	389	2025-02-22 14:04:55
41	1195	10	202	2025-02-04 16:42:53
753	415	8	6	2024-07-26 22:01:35
273	124	6	384	2024-06-11 08:01:42
308	205	2	107	2024-07-21 05:51:33
657	1122	3	215	2024-04-04 06:09:01
798	629	3	298	2025-02-25 04:02:08
653	17	8	105	2025-01-30 03:36:00
397	968	7	378	2025-03-03 11:02:53
585	830	3	192	2024-08-16 17:27:03
454	1341	2	6	2025-02-27 20:10:44
295	550	8	81	2024-09-18 11:11:05
331	421	5	95	2025-02-01 19:57:44
473	212	10	50	2024-12-06 07:08:35
714	984	10	100	2024-10-06 10:24:27
7	804	10	240	2024-05-09 00:24:26
261	620	10	27	2024-04-24 06:16:34
556	556	4	338	2024-10-26 22:44:44
103	667	8	271	2024-10-06 09:09:51
100	528	8	378	2024-08-30 12:56:58
33	1287	7	399	2025-01-13 05:24:59
165	190	8	169	2024-12-09 20:59:50
778	311	5	339	2024-05-06 04:26:31
277	874	4	257	2024-07-24 11:03:33
66	1071	6	272	2025-01-17 15:01:57
564	1290	5	394	2024-08-23 15:47:47
693	109	1	33	2025-03-29 01:53:55
364	431	7	231	2025-01-27 17:28:56
600	935	5	239	2025-01-23 05:30:30
73	422	5	95	2024-11-18 11:04:46
1	1122	3	215	2024-12-03 15:19:54
266	987	9	79	2024-07-31 13:52:41
378	889	10	204	2024-12-30 14:37:30
319	660	4	376	2025-02-04 16:14:24
340	231	7	316	2024-11-13 20:17:01
36	377	5	214	2024-11-07 16:00:23
243	426	10	208	2024-07-09 08:56:54
339	937	7	64	2024-07-28 08:56:40
362	909	10	143	2024-06-11 22:19:12
212	1094	6	143	2024-12-31 03:19:24
772	663	10	149	2025-02-16 14:16:36
750	600	8	305	2024-10-22 21:48:51
679	136	2	32	2024-08-04 05:31:30
114	106	9	177	2025-01-19 04:46:14
444	652	9	72	2024-05-27 20:48:56
142	15	8	310	2024-05-13 20:58:15
88	354	6	297	2024-06-19 13:31:46
131	742	1	334	2024-12-21 14:59:35
680	1208	7	159	2025-03-10 16:06:03
91	432	2	393	2024-07-28 21:24:48
599	1181	8	388	2024-09-19 20:18:23
291	786	5	86	2025-01-09 09:44:14
552	42	9	61	2025-03-22 15:13:03
77	1002	9	266	2024-07-14 02:58:14
29	1006	8	301	2024-05-09 01:43:49
66	306	5	192	2024-04-15 03:13:42
1	1110	8	115	2025-03-15 15:23:30
265	1130	8	125	2024-08-17 07:45:38
63	773	2	321	2024-10-16 12:41:58
607	972	8	72	2025-02-01 01:30:13
179	1251	6	373	2024-11-01 07:44:50
201	614	9	156	2025-03-04 19:52:10
150	1366	4	223	2025-02-13 14:16:52
248	467	5	189	2024-06-15 08:07:38
489	80	3	282	2024-04-05 03:18:51
702	1273	5	164	2025-03-13 18:29:05
782	1382	4	262	2024-10-24 23:06:58
484	477	4	163	2025-04-01 08:52:50
1	1104	4	234	2024-11-27 12:22:40
668	690	7	216	2025-01-06 15:37:50
651	863	7	109	2024-06-14 00:18:53
753	1130	8	125	2024-05-02 08:24:25
134	613	9	156	2025-02-08 21:18:54
254	674	2	232	2025-02-01 18:04:46
324	857	9	188	2024-09-22 19:11:28
77	998	4	320	2024-09-22 13:27:53
362	151	5	392	2024-06-08 02:49:04
218	306	5	192	2024-09-08 18:03:12
272	1013	4	375	2025-01-07 10:33:51
188	729	4	53	2024-08-09 22:37:21
60	935	5	239	2024-11-13 23:20:23
59	248	1	152	2024-10-25 23:05:48
630	258	9	202	2025-02-21 06:32:50
682	337	6	311	2024-07-16 09:29:45
336	592	1	324	2024-07-04 22:06:16
396	314	6	155	2025-02-23 07:15:42
251	1390	7	289	2024-12-10 08:48:34
519	810	3	119	2024-06-03 11:28:29
615	352	4	58	2024-12-24 02:18:49
487	145	10	118	2024-07-07 09:08:48
59	22	3	67	2024-07-27 21:30:44
427	211	10	50	2024-09-20 15:16:35
78	1261	7	182	2024-09-23 19:38:11
193	1373	6	23	2024-06-19 19:22:31
652	349	7	370	2024-08-21 23:47:07
65	71	8	394	2024-10-02 07:57:02
584	747	1	128	2025-03-01 11:30:18
164	1155	8	67	2025-01-14 03:43:47
309	354	6	297	2025-03-22 13:21:53
445	710	1	224	2024-05-03 15:09:18
416	983	10	100	2025-01-29 14:53:37
339	1174	5	102	2024-05-16 09:50:59
767	481	5	55	2025-02-04 09:31:13
575	1033	6	271	2025-03-22 18:47:47
314	904	2	239	2025-04-03 06:31:21
476	643	1	210	2025-02-17 07:40:02
339	196	5	371	2024-04-17 17:10:42
530	1216	5	47	2024-11-01 23:21:34
162	1138	9	189	2025-03-15 05:53:22
554	766	6	55	2024-05-29 11:43:17
340	523	8	97	2025-02-13 10:29:45
128	44	2	122	2024-05-06 08:11:13
279	1370	9	262	2024-04-30 18:05:36
43	477	4	163	2025-03-29 15:59:05
384	1164	7	391	2024-11-27 12:10:41
164	509	3	226	2024-11-09 19:19:44
766	17	8	105	2024-11-06 19:20:39
35	535	5	312	2024-07-01 11:01:46
211	220	5	224	2024-10-04 00:26:05
333	114	7	144	2024-10-11 10:43:25
464	364	6	76	2024-09-25 10:20:44
300	1483	4	123	2025-03-14 00:24:22
7	1004	9	266	2025-03-08 01:28:33
136	189	8	169	2024-09-24 13:23:59
717	852	1	2	2024-05-23 04:47:16
608	945	4	184	2024-06-25 23:42:15
43	1072	6	272	2024-10-30 18:24:26
213	835	8	322	2024-07-29 20:48:06
9	227	2	134	2025-03-05 16:42:32
421	1434	7	44	2024-11-30 03:11:29
457	792	1	139	2025-01-11 21:00:47
64	1009	10	315	2024-10-13 07:20:41
157	259	9	202	2024-08-21 07:06:47
107	274	2	244	2024-08-22 14:19:50
290	1112	2	320	2024-12-07 10:57:43
332	1085	6	187	2024-05-30 09:39:11
660	270	8	324	2024-12-18 06:52:22
616	731	1	235	2024-08-09 06:09:36
174	335	6	1	2025-03-03 18:31:48
604	1141	8	140	2024-12-25 23:51:54
314	716	6	350	2024-07-21 04:13:37
208	705	1	29	2025-02-03 20:20:48
310	835	8	322	2025-03-14 04:10:51
199	675	2	232	2024-10-08 00:51:26
373	1263	6	178	2025-02-21 12:45:38
75	99	1	242	2024-04-29 01:26:07
264	166	8	248	2024-06-03 22:54:48
157	633	8	228	2024-08-01 01:59:12
664	221	5	224	2024-10-04 11:29:06
51	114	7	144	2024-04-26 03:17:55
145	216	5	353	2024-06-01 14:51:27
371	1437	1	184	2025-01-04 13:50:08
346	741	1	334	2024-07-25 20:39:29
423	216	5	353	2024-08-23 15:48:06
679	1470	6	341	2024-06-22 12:22:51
322	243	10	246	2024-09-03 21:46:35
20	334	6	1	2025-02-05 01:52:30
153	1253	6	373	2024-06-10 12:27:15
94	82	4	292	2024-12-04 05:54:00
228	673	2	232	2024-10-02 10:39:36
731	934	9	117	2024-10-26 21:16:51
627	127	10	166	2024-12-07 20:35:18
135	627	5	254	2025-02-02 17:23:41
549	41	3	251	2024-11-05 21:30:29
91	250	1	152	2024-09-08 05:23:51
153	1467	3	328	2024-10-12 15:55:35
307	557	4	338	2024-11-26 08:25:12
299	913	10	191	2024-05-24 15:42:13
140	1042	9	299	2024-06-01 20:01:33
587	1200	2	389	2024-09-24 18:17:27
431	427	6	379	2024-04-22 02:31:38
48	679	6	202	2024-10-10 20:15:58
369	1073	9	170	2024-10-04 20:08:36
780	791	2	163	2024-04-24 10:40:14
342	1313	10	255	2024-09-05 19:41:31
714	1087	7	120	2024-04-28 21:20:28
100	825	4	399	2025-02-26 06:33:24
294	127	10	166	2024-06-16 18:35:33
322	303	2	353	2024-06-26 13:47:08
120	869	9	48	2024-12-12 14:49:10
661	326	7	346	2024-09-06 05:53:16
132	882	10	101	2024-06-09 00:23:45
476	1450	7	336	2024-04-11 01:47:57
61	353	6	297	2024-08-19 04:44:10
240	130	6	48	2024-07-13 03:20:32
198	572	1	270	2024-09-01 14:21:35
97	119	1	239	2024-10-19 02:06:46
286	1484	4	123	2025-01-01 21:37:09
626	1279	3	139	2024-07-20 05:49:01
358	715	1	7	2024-12-21 21:09:27
284	545	7	198	2025-02-11 05:15:00
138	719	5	266	2024-05-09 20:16:02
693	1320	8	384	2024-07-18 06:31:47
709	875	4	257	2025-01-31 08:08:29
502	475	5	144	2024-05-02 10:08:18
172	1309	1	262	2024-07-02 04:44:20
154	345	5	299	2025-01-26 20:21:33
270	1173	5	102	2024-12-26 03:55:37
613	1053	1	178	2025-01-11 18:14:45
250	1257	8	23	2025-03-21 22:10:22
167	1091	9	241	2024-05-03 05:29:11
74	992	1	320	2024-12-04 19:59:19
433	923	7	77	2024-06-10 14:53:46
449	1338	2	93	2025-03-01 03:14:27
15	874	4	257	2024-09-20 15:23:14
86	484	3	157	2025-04-01 15:02:19
310	1200	2	389	2024-04-10 14:48:14
344	507	10	355	2024-12-12 10:36:18
265	1464	6	176	2024-12-19 19:14:31
481	12	4	284	2024-08-16 22:11:29
629	1416	3	399	2025-01-09 17:04:35
737	1004	9	266	2024-11-18 21:23:08
624	653	9	72	2024-05-29 21:17:13
276	336	6	311	2025-03-20 20:59:31
317	27	1	105	2024-07-30 08:19:42
240	935	5	239	2024-10-26 00:29:08
158	1089	3	37	2024-07-20 17:25:37
674	296	5	328	2024-06-24 03:13:43
529	418	3	287	2024-09-20 22:14:03
130	229	2	134	2024-09-27 19:37:37
37	514	6	78	2025-04-03 04:56:45
617	1121	3	215	2024-11-05 16:05:31
230	925	7	330	2024-09-14 11:58:33
22	993	1	320	2024-08-02 22:24:36
393	1447	8	189	2024-11-18 14:52:56
767	7	5	250	2024-12-02 20:12:09
390	814	4	137	2024-06-08 07:47:22
444	531	10	222	2025-01-17 09:36:02
367	1089	3	37	2024-11-15 23:26:28
313	333	6	1	2024-11-27 18:24:18
552	113	7	144	2024-05-08 20:35:08
51	790	2	163	2024-12-13 23:41:49
51	1237	10	32	2024-09-18 16:36:41
193	425	10	208	2024-05-13 21:40:36
638	36	10	308	2024-05-15 02:18:35
385	20	8	194	2024-06-11 01:30:39
205	89	5	44	2024-07-18 09:47:20
798	1158	4	135	2024-07-29 13:20:34
499	1302	2	87	2024-07-02 19:17:14
350	1377	1	256	2024-09-29 14:41:35
783	734	7	1	2024-10-10 16:59:56
707	582	2	338	2024-04-16 04:28:58
100	1455	6	285	2024-05-03 17:00:28
158	829	3	192	2025-03-23 12:40:30
367	1423	6	389	2024-11-11 17:22:27
768	804	10	240	2024-06-18 07:52:00
784	1337	2	93	2024-08-11 07:19:22
320	382	8	280	2024-08-13 00:35:42
593	575	7	213	2025-01-04 02:39:31
41	21	3	67	2024-09-21 12:45:54
244	155	6	279	2024-07-24 04:21:14
1	1313	10	255	2024-07-01 02:49:16
361	578	7	312	2024-08-29 00:10:30
771	624	8	102	2024-08-28 06:39:23
212	739	5	100	2024-10-05 07:37:47
41	461	9	60	2024-05-13 19:02:59
114	1349	7	329	2025-02-17 05:33:34
463	976	7	85	2024-07-21 15:44:40
510	106	9	177	2024-06-12 09:45:24
9	152	5	392	2024-11-17 14:28:27
534	453	7	221	2024-06-24 19:06:09
335	490	4	101	2025-01-25 20:27:24
114	763	8	287	2024-12-08 04:45:52
288	1385	10	122	2024-04-23 16:45:56
247	312	5	339	2024-07-24 03:42:04
632	746	1	128	2024-09-02 23:53:22
325	230	7	316	2024-12-27 01:14:35
764	886	5	212	2024-06-02 19:04:44
180	1206	10	309	2024-12-17 04:20:10
574	1298	6	240	2025-01-29 22:50:00
426	899	5	32	2024-10-28 23:04:51
276	773	2	321	2024-04-08 15:22:14
138	75	6	32	2024-12-20 04:47:47
104	1183	4	99	2024-12-10 03:54:46
84	1194	9	399	2024-12-31 02:51:34
96	363	6	76	2025-03-01 17:53:38
110	953	5	391	2025-03-10 02:12:41
492	977	4	2	2024-12-31 06:16:43
53	1016	6	21	2024-08-17 11:25:23
116	773	2	321	2024-09-24 01:35:04
115	603	2	204	2024-10-10 04:08:25
382	551	8	81	2025-02-15 01:53:25
218	769	9	62	2024-07-24 08:23:02
264	840	10	41	2025-02-08 12:03:55
203	454	8	375	2024-08-25 22:18:02
303	762	8	287	2024-12-01 18:00:20
377	1456	6	285	2024-04-23 12:40:17
657	160	1	212	2025-01-16 10:59:07
213	975	7	85	2024-07-05 14:24:45
2	1430	4	169	2024-09-17 08:47:23
477	1330	6	348	2025-01-21 04:20:52
182	516	6	363	2024-09-20 08:45:27
149	418	3	287	2024-08-17 15:03:14
383	145	10	118	2024-05-31 22:23:20
428	463	9	60	2024-11-11 09:25:35
162	1460	9	77	2024-10-31 21:44:39
444	568	2	171	2024-06-15 03:36:39
456	355	3	161	2024-12-26 23:01:17
288	501	10	16	2024-12-24 13:35:20
258	414	2	25	2024-10-18 20:02:02
184	1076	6	264	2025-03-18 10:11:34
349	521	8	97	2024-12-13 07:20:41
243	1328	7	382	2024-05-15 07:18:20
462	893	7	258	2024-09-29 12:39:06
246	445	3	357	2024-10-14 10:58:33
337	1451	7	336	2024-07-14 00:59:32
60	580	9	41	2024-05-19 20:23:44
258	85	3	248	2024-09-13 03:16:39
475	290	8	184	2024-06-09 10:48:16
606	683	10	321	2024-06-18 14:30:56
19	172	8	32	2024-08-29 15:29:40
222	1255	8	382	2024-04-29 15:16:28
336	694	2	168	2024-11-10 15:42:05
185	440	10	5	2024-08-25 13:11:38
193	949	3	386	2024-04-12 04:05:42
305	490	4	101	2024-12-16 23:50:40
22	415	8	6	2025-02-06 16:30:23
217	330	7	92	2025-01-25 06:52:52
210	1004	9	266	2024-06-04 17:59:38
202	161	1	212	2024-10-15 12:50:10
539	1199	2	185	2024-08-28 07:56:16
213	299	10	254	2025-03-24 18:39:44
354	79	3	282	2025-01-11 08:23:12
171	58	1	176	2024-11-02 05:44:45
764	458	2	48	2024-04-19 00:12:16
290	610	5	41	2024-06-15 11:18:41
316	1114	9	196	2024-06-29 23:22:23
198	1343	3	337	2024-12-21 06:29:57
417	111	6	397	2024-05-24 11:47:05
290	957	2	271	2024-05-08 19:20:36
12	414	2	25	2025-01-21 06:51:02
427	742	1	334	2024-05-13 01:36:56
690	104	8	178	2024-12-18 11:41:54
247	95	9	125	2025-03-10 07:05:34
141	524	8	155	2024-08-12 04:04:59
164	542	10	385	2024-08-20 16:27:21
319	1307	4	14	2024-05-06 10:36:57
256	123	6	384	2025-03-22 19:52:54
227	1035	8	36	2025-03-11 03:35:14
126	305	5	192	2024-11-01 20:50:23
35	1396	1	249	2025-02-14 19:46:26
360	205	2	107	2024-07-15 05:03:39
559	837	6	27	2024-07-11 09:01:32
427	198	3	60	2024-06-13 09:35:58
686	287	1	16	2024-05-15 12:38:58
242	1188	2	186	2024-05-31 00:47:21
718	1336	2	93	2024-05-12 03:58:13
16	947	3	386	2025-02-18 05:15:36
655	30	3	104	2024-05-30 01:56:33
362	439	7	278	2024-07-30 07:25:23
313	964	5	28	2025-03-16 14:45:50
303	719	5	266	2025-01-09 19:36:46
121	443	4	288	2025-03-11 16:37:18
31	1440	2	108	2024-08-14 15:10:02
555	666	8	271	2024-09-11 14:57:07
17	277	2	14	2025-03-29 18:26:47
792	1095	6	143	2024-07-24 22:30:21
611	1196	10	202	2024-09-15 13:11:43
548	248	1	152	2024-10-20 10:26:49
538	872	6	115	2024-11-10 19:41:18
252	1453	2	159	2024-10-01 16:14:47
444	1281	9	284	2024-05-07 21:36:36
79	624	8	102	2024-07-31 19:08:54
373	1486	1	10	2024-12-19 12:38:35
137	65	5	364	2024-12-17 07:23:32
369	1451	7	336	2024-12-24 10:20:39
139	80	3	282	2024-07-31 15:13:41
171	26	3	212	2024-05-15 07:54:39
70	736	10	392	2024-06-26 07:09:35
272	238	10	299	2025-03-20 05:17:16
664	135	6	158	2024-04-18 06:13:02
402	90	7	98	2024-04-29 19:52:43
152	1149	6	330	2024-11-29 05:26:25
459	1158	4	135	2024-07-03 08:16:23
738	1284	1	147	2025-01-08 23:06:03
37	2	10	214	2024-07-29 09:19:32
16	1288	7	399	2024-08-18 11:51:28
81	652	9	72	2025-03-05 19:04:56
423	351	4	58	2024-08-07 03:47:31
360	173	2	56	2024-06-02 09:27:23
409	251	1	257	2024-07-30 09:14:20
343	1047	1	49	2025-02-21 09:50:42
500	619	10	27	2024-07-27 19:53:23
193	1282	9	284	2024-09-20 02:57:07
529	251	1	257	2025-02-28 20:55:36
300	734	7	1	2024-09-14 04:34:33
298	1012	4	375	2024-05-17 07:24:35
80	1090	3	37	2025-02-01 17:54:22
781	1411	8	377	2024-11-26 12:38:22
174	501	10	16	2024-08-14 06:49:50
563	91	7	98	2024-12-30 15:49:21
296	1218	7	100	2024-06-05 11:36:58
300	692	8	38	2024-07-21 21:45:40
203	1200	2	389	2024-11-10 15:49:48
513	313	6	155	2024-08-21 14:46:01
132	1041	9	299	2025-01-21 16:20:18
\.


--
-- TOC entry 3445 (class 0 OID 16763)
-- Dependencies: 226
-- Data for Name: entryrecord; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.entryrecord (personid, deviceid, zoneid, gymid, entrytime) FROM stdin;
790	788	2	387	2024-11-05 05:53:40
686	1103	4	234	2024-10-23 23:00:48
81	505	10	355	2024-04-26 03:15:26
290	1162	5	373	2024-12-31 04:09:32
124	367	1	14	2024-12-03 03:21:10
67	167	3	170	2024-07-07 02:47:13
250	998	4	320	2024-04-25 23:09:08
598	1042	9	299	2024-07-18 20:33:08
83	1266	1	384	2024-06-04 11:18:29
392	82	4	292	2024-11-24 15:22:48
274	1223	6	335	2025-04-01 13:18:24
74	290	8	184	2024-07-10 22:27:16
145	370	9	39	2024-05-05 22:10:43
124	845	3	257	2024-09-19 10:02:44
202	721	2	314	2024-09-27 09:47:56
139	1007	6	378	2024-05-22 18:39:11
6	545	7	198	2024-12-25 09:51:54
6	1367	4	223	2025-03-15 13:23:20
120	559	10	150	2024-06-19 13:41:39
537	1441	7	52	2024-12-20 13:44:14
276	428	6	379	2024-06-08 21:52:49
36	515	6	363	2024-05-19 10:20:37
501	98	1	242	2024-04-12 02:25:55
147	221	5	224	2025-02-20 13:52:31
578	619	10	27	2025-01-12 14:05:11
203	330	7	92	2025-02-10 22:14:21
245	158	3	211	2024-04-29 09:22:15
32	815	8	328	2024-08-02 00:04:39
119	928	6	203	2024-09-15 06:31:08
199	488	4	146	2025-03-28 13:34:57
118	598	1	197	2025-02-26 10:14:35
276	578	7	312	2024-07-22 08:24:51
363	738	5	100	2024-11-21 23:35:44
236	864	8	283	2025-03-15 20:15:02
141	322	8	313	2024-05-20 13:01:58
370	68	2	90	2025-02-07 05:56:49
128	1189	2	186	2024-10-01 14:29:40
788	972	8	72	2024-09-18 02:15:39
284	1224	6	335	2024-12-11 11:16:40
155	89	5	44	2024-11-14 23:59:25
573	212	10	50	2024-10-13 05:08:00
550	1205	9	116	2024-12-11 15:45:12
247	900	5	32	2024-08-01 07:27:01
98	1412	8	377	2024-05-21 14:52:32
223	265	3	253	2025-02-17 11:12:52
161	1236	10	347	2024-12-26 05:35:28
224	1097	4	86	2025-03-15 15:56:54
772	1451	7	336	2024-07-21 22:10:28
10	54	2	209	2024-06-16 00:37:06
469	267	3	17	2024-10-06 15:20:55
60	505	10	355	2024-08-12 00:31:13
156	884	5	212	2024-12-28 23:36:49
203	1381	7	279	2025-04-02 15:01:59
208	176	2	51	2024-04-17 10:36:31
242	489	4	101	2024-06-30 05:35:53
8	1059	9	122	2024-07-29 19:16:34
125	39	2	397	2025-02-20 12:32:54
223	449	7	347	2024-07-02 22:14:54
718	354	6	297	2024-10-29 00:51:29
2	1022	10	37	2024-08-22 09:42:31
268	580	9	41	2024-07-11 12:26:29
46	1385	10	122	2024-05-30 18:27:27
207	340	8	380	2024-05-21 05:41:49
485	1203	9	116	2024-06-06 23:45:44
670	8	5	250	2025-01-02 21:24:30
462	1001	3	238	2025-03-20 23:54:51
155	991	1	320	2024-12-08 21:58:49
14	1438	1	184	2024-11-05 02:49:19
585	251	1	257	2024-09-29 13:01:36
331	569	6	163	2025-01-23 14:59:49
343	335	6	1	2024-08-28 14:17:45
233	989	9	264	2024-07-03 11:06:00
67	309	6	352	2024-10-24 17:22:05
522	7	5	250	2024-05-03 08:02:31
196	1018	6	21	2024-05-04 13:05:03
393	150	1	19	2024-06-20 21:02:01
80	924	7	77	2025-03-06 05:14:33
317	1092	9	241	2024-11-18 01:52:50
709	1315	10	373	2025-01-23 13:26:24
359	602	2	204	2024-05-31 22:08:51
663	841	10	41	2024-08-06 01:44:29
711	1149	6	330	2024-05-17 14:55:49
625	533	5	312	2024-04-15 07:37:07
376	1080	1	70	2024-09-25 01:36:32
261	1387	10	122	2024-07-22 00:40:14
650	612	1	228	2024-10-19 12:44:48
227	364	6	76	2024-07-26 10:44:12
232	949	3	386	2024-05-30 19:18:20
109	202	4	49	2024-10-10 10:44:20
385	598	1	197	2024-05-25 11:10:47
354	405	2	361	2024-07-30 10:15:50
569	1282	9	284	2024-07-09 02:07:35
371	323	8	386	2025-02-15 12:21:26
64	1327	7	382	2024-10-08 09:11:11
332	287	1	16	2025-01-08 18:30:30
492	763	8	287	2025-02-22 20:01:22
537	839	10	41	2024-12-16 15:33:01
713	311	5	339	2024-04-21 10:39:21
17	1258	8	23	2024-10-29 05:30:55
441	1325	3	142	2024-04-03 02:18:12
672	1272	5	164	2024-07-25 11:52:44
799	72	8	394	2024-10-09 07:26:23
91	668	8	271	2024-04-05 02:15:37
553	264	3	253	2024-12-30 22:43:35
27	1444	3	43	2024-10-30 08:12:47
99	463	9	60	2025-01-16 15:09:18
70	1459	2	216	2025-01-17 14:04:56
210	1435	5	146	2024-11-16 09:59:44
569	93	5	340	2025-03-06 04:04:48
704	896	7	96	2024-06-30 23:25:26
285	1075	9	170	2025-01-08 02:10:52
155	535	5	312	2024-04-03 02:33:58
125	933	9	117	2024-05-11 00:04:35
475	287	1	16	2024-09-04 06:39:43
134	71	8	394	2024-11-01 07:43:35
604	1332	6	348	2024-09-11 03:45:47
58	1458	2	216	2025-01-30 13:15:02
51	443	4	288	2024-12-27 09:35:19
92	535	5	312	2024-11-02 13:24:25
44	856	2	206	2024-09-25 10:55:02
547	1061	9	122	2024-04-22 14:35:55
235	916	7	371	2024-07-21 07:44:16
162	684	4	238	2024-05-23 17:34:57
83	1343	3	337	2024-06-01 00:09:54
427	18	8	194	2024-04-09 05:29:10
620	1245	3	98	2024-08-02 09:31:44
266	801	7	375	2024-11-04 00:46:12
81	1163	7	391	2025-01-03 12:08:21
353	1411	8	377	2024-12-28 10:17:43
13	860	3	178	2024-11-15 18:36:31
736	845	3	257	2025-01-21 11:57:25
490	659	8	157	2025-02-06 04:51:17
689	253	7	165	2024-06-20 06:56:18
223	136	2	32	2024-04-04 04:14:20
334	434	10	329	2025-02-16 02:21:04
263	74	6	32	2024-07-04 00:40:15
257	1042	9	299	2024-11-27 20:58:01
127	474	5	144	2024-07-17 06:08:09
629	1002	9	266	2025-03-21 18:09:25
666	406	2	361	2024-11-07 18:50:56
231	12	4	284	2024-10-11 12:44:37
127	1097	4	86	2024-07-11 11:14:52
683	313	6	155	2024-08-14 09:27:12
629	115	7	144	2025-02-05 01:33:56
127	1302	2	87	2024-07-26 09:31:37
789	1181	8	388	2024-09-19 11:19:53
651	301	9	209	2024-06-17 20:01:31
175	1437	1	184	2025-02-27 21:07:40
208	157	3	211	2025-02-17 11:31:58
783	89	5	44	2024-10-22 21:19:55
137	125	10	166	2024-04-30 12:21:40
457	1291	5	394	2025-04-01 17:51:08
127	462	9	60	2024-04-16 20:44:57
61	115	7	144	2024-06-02 10:48:49
561	727	5	148	2024-09-04 20:33:33
258	965	3	398	2024-10-14 02:47:52
760	520	7	186	2025-01-18 15:16:11
396	649	6	393	2024-05-15 02:08:52
275	674	2	232	2025-02-03 10:56:03
64	1023	10	37	2024-11-22 21:01:41
446	1038	7	327	2024-05-21 07:09:49
170	649	6	393	2025-03-26 13:50:55
51	1016	6	21	2024-12-28 19:04:13
553	1199	2	185	2024-08-26 09:27:08
312	290	8	184	2025-03-16 05:30:13
161	1323	8	193	2024-10-27 05:00:53
116	313	6	155	2025-01-17 18:16:21
125	918	9	37	2024-07-22 06:12:46
105	1334	9	175	2024-10-04 08:42:24
118	610	5	41	2024-07-16 07:36:10
28	566	7	43	2025-01-20 04:19:30
9	1036	8	36	2024-08-05 10:20:36
80	1039	10	131	2025-03-07 13:02:45
286	1314	10	373	2025-01-06 14:53:15
14	915	7	371	2024-05-17 10:18:32
342	1268	7	265	2024-06-03 14:53:01
408	656	2	132	2024-08-17 21:30:25
261	125	10	166	2024-09-05 05:50:23
59	320	8	313	2024-11-03 20:43:54
108	802	4	188	2024-06-24 08:04:59
286	911	10	143	2024-08-11 03:24:46
152	209	4	62	2024-06-28 15:37:34
193	502	10	16	2025-03-16 02:58:22
11	818	8	78	2024-08-26 18:40:52
201	720	2	314	2024-08-04 16:28:46
292	60	6	288	2024-11-15 01:34:21
300	1090	3	37	2024-05-09 17:29:28
715	463	9	60	2024-09-08 13:07:32
297	802	4	188	2024-12-28 11:01:25
82	1004	9	266	2024-12-11 04:26:18
72	1297	6	240	2025-03-19 10:52:23
650	442	4	288	2025-01-11 11:52:26
791	406	2	361	2025-02-26 12:14:38
48	738	5	100	2025-03-19 14:47:15
15	626	5	254	2025-03-23 01:41:27
220	1308	4	14	2025-03-22 10:47:23
517	739	5	100	2024-12-27 12:46:21
366	1300	4	168	2024-12-10 08:36:10
469	826	4	399	2025-02-20 20:41:43
167	994	6	383	2024-09-29 18:03:56
214	840	10	41	2025-02-26 13:13:28
716	781	3	148	2024-07-25 22:17:21
389	1419	6	184	2024-05-15 20:48:59
140	1043	9	299	2024-06-14 15:14:39
667	1369	4	321	2024-09-08 11:16:13
411	1477	2	354	2024-07-08 15:20:26
699	343	5	35	2024-11-02 03:11:43
786	800	7	375	2024-09-19 01:49:21
23	567	2	171	2024-11-26 21:31:34
757	984	10	100	2024-05-27 14:34:29
122	325	7	346	2025-03-11 13:24:11
371	695	2	168	2024-07-13 18:32:11
28	142	5	379	2024-07-20 04:48:43
91	1043	9	299	2024-08-27 13:46:45
112	1036	8	36	2024-10-31 06:46:53
360	403	9	90	2024-11-12 18:16:23
239	740	5	100	2025-02-07 16:20:55
322	227	2	134	2024-05-16 18:21:46
28	1084	4	237	2024-04-16 04:41:36
282	1343	3	337	2024-12-07 05:10:44
251	729	4	53	2024-05-29 05:16:59
54	1136	9	372	2024-07-02 08:22:28
320	103	8	178	2024-07-18 11:36:55
321	210	10	50	2024-12-10 15:25:58
690	1462	6	176	2024-09-16 05:27:36
138	144	5	379	2024-07-28 15:58:10
571	990	9	264	2025-02-06 14:54:03
329	373	7	293	2024-04-20 21:22:27
190	276	2	14	2024-09-02 23:01:17
358	1330	6	348	2024-04-04 08:19:02
66	834	9	327	2024-11-07 03:12:09
190	787	2	387	2024-08-08 05:23:44
8	1407	8	92	2024-12-16 11:42:31
53	583	2	338	2024-04-24 05:03:17
270	308	6	352	2024-04-03 06:08:40
52	1185	2	178	2024-12-25 04:42:54
109	478	4	163	2024-04-19 09:25:45
305	645	8	297	2025-01-19 10:53:02
82	678	6	202	2024-05-20 20:27:20
285	1283	9	284	2024-11-12 05:43:08
398	9	5	186	2025-03-22 20:03:25
375	666	8	271	2024-12-11 16:47:50
65	1016	6	21	2024-09-13 12:25:15
258	720	2	314	2024-10-27 04:43:33
246	1031	7	366	2025-02-16 23:30:18
375	1073	9	170	2025-02-17 07:05:45
222	1154	2	101	2025-03-06 07:49:16
160	1052	3	379	2025-01-18 05:21:37
658	902	1	307	2024-10-01 15:15:27
281	1128	10	356	2024-07-06 18:23:21
505	744	5	105	2024-12-11 23:41:28
306	572	1	270	2024-12-29 18:30:48
250	584	3	384	2024-10-20 10:05:56
288	1467	3	328	2024-05-21 08:20:22
349	398	5	90	2024-08-07 16:30:42
472	633	8	228	2024-09-03 02:57:36
153	328	5	279	2024-08-29 19:56:52
707	641	4	259	2024-04-08 08:38:00
644	49	5	288	2024-08-20 03:37:11
487	1335	9	175	2024-10-06 01:23:07
275	111	6	397	2024-06-27 23:59:59
45	785	5	86	2024-11-23 00:06:40
747	397	6	340	2025-01-02 08:47:04
538	686	4	170	2024-05-23 04:09:54
19	1320	8	384	2025-02-12 02:00:27
792	1168	1	264	2025-03-15 09:56:34
333	959	7	351	2024-06-21 12:41:50
274	7	5	250	2025-01-17 09:11:19
504	436	10	329	2025-03-10 14:40:49
108	695	2	168	2024-09-11 13:40:13
387	777	6	300	2025-02-09 19:53:47
83	1117	2	317	2025-02-15 12:12:16
373	1255	8	382	2025-02-24 00:33:31
34	751	7	171	2024-11-03 02:23:27
342	1082	4	237	2024-11-30 05:54:39
189	467	5	189	2025-02-06 23:05:47
218	239	10	299	2025-03-16 04:32:01
64	1398	1	249	2024-05-23 20:38:45
347	281	8	350	2024-04-07 15:09:58
295	291	8	184	2024-12-31 13:08:37
368	340	8	380	2024-08-27 08:51:52
720	1249	9	10	2024-09-18 08:09:11
365	163	1	158	2024-05-04 08:42:57
641	1101	7	51	2025-02-11 12:15:43
354	657	8	157	2024-09-04 20:54:34
281	1467	3	328	2024-09-22 13:31:29
398	677	3	24	2025-02-12 11:41:21
41	546	7	198	2024-09-15 05:03:31
113	191	8	169	2024-08-14 06:44:21
560	683	10	321	2024-10-20 23:36:11
366	1055	3	177	2024-04-02 15:57:35
539	1110	8	115	2024-10-06 23:54:32
383	1480	10	68	2024-05-10 12:52:22
616	1017	6	21	2025-02-10 07:20:54
151	447	3	171	2025-03-15 06:48:05
786	1060	9	122	2024-11-11 22:12:20
245	589	10	312	2024-12-09 10:23:31
338	695	2	168	2024-11-08 18:26:10
101	836	8	322	2024-08-11 16:05:09
479	163	1	158	2025-02-08 16:18:23
161	614	9	156	2024-05-02 04:30:06
197	1049	1	49	2024-08-06 21:09:46
393	1033	6	271	2025-01-06 09:06:54
66	415	8	6	2024-04-21 04:02:15
279	1423	6	389	2025-02-22 14:04:55
41	1195	10	202	2025-02-04 16:42:53
753	415	8	6	2024-07-26 22:01:35
273	124	6	384	2024-06-11 08:01:42
308	205	2	107	2024-07-21 05:51:33
657	1122	3	215	2024-04-04 06:09:01
798	629	3	298	2025-02-25 04:02:08
653	17	8	105	2025-01-30 03:36:00
397	968	7	378	2025-03-03 11:02:53
585	830	3	192	2024-08-16 17:27:03
454	1341	2	6	2025-02-27 20:10:44
295	550	8	81	2024-09-18 11:11:05
331	421	5	95	2025-02-01 19:57:44
473	212	10	50	2024-12-06 07:08:35
714	984	10	100	2024-10-06 10:24:27
7	804	10	240	2024-05-09 00:24:26
261	620	10	27	2024-04-24 06:16:34
556	556	4	338	2024-10-26 22:44:44
103	667	8	271	2024-10-06 09:09:51
100	528	8	378	2024-08-30 12:56:58
33	1287	7	399	2025-01-13 05:24:59
165	190	8	169	2024-12-09 20:59:50
778	311	5	339	2024-05-06 04:26:31
277	874	4	257	2024-07-24 11:03:33
66	1071	6	272	2025-01-17 15:01:57
564	1290	5	394	2024-08-23 15:47:47
693	109	1	33	2025-03-29 01:53:55
364	431	7	231	2025-01-27 17:28:56
600	935	5	239	2025-01-23 05:30:30
73	422	5	95	2024-11-18 11:04:46
1	1122	3	215	2024-12-03 15:19:54
266	987	9	79	2024-07-31 13:52:41
378	889	10	204	2024-12-30 14:37:30
319	660	4	376	2025-02-04 16:14:24
340	231	7	316	2024-11-13 20:17:01
36	377	5	214	2024-11-07 16:00:23
243	426	10	208	2024-07-09 08:56:54
339	937	7	64	2024-07-28 08:56:40
362	909	10	143	2024-06-11 22:19:12
212	1094	6	143	2024-12-31 03:19:24
772	663	10	149	2025-02-16 14:16:36
750	600	8	305	2024-10-22 21:48:51
679	136	2	32	2024-08-04 05:31:30
114	106	9	177	2025-01-19 04:46:14
444	652	9	72	2024-05-27 20:48:56
142	15	8	310	2024-05-13 20:58:15
88	354	6	297	2024-06-19 13:31:46
131	742	1	334	2024-12-21 14:59:35
680	1208	7	159	2025-03-10 16:06:03
91	432	2	393	2024-07-28 21:24:48
599	1181	8	388	2024-09-19 20:18:23
291	786	5	86	2025-01-09 09:44:14
552	42	9	61	2025-03-22 15:13:03
77	1002	9	266	2024-07-14 02:58:14
29	1006	8	301	2024-05-09 01:43:49
66	306	5	192	2024-04-15 03:13:42
1	1110	8	115	2025-03-15 15:23:30
265	1130	8	125	2024-08-17 07:45:38
63	773	2	321	2024-10-16 12:41:58
607	972	8	72	2025-02-01 01:30:13
179	1251	6	373	2024-11-01 07:44:50
201	614	9	156	2025-03-04 19:52:10
150	1366	4	223	2025-02-13 14:16:52
248	467	5	189	2024-06-15 08:07:38
489	80	3	282	2024-04-05 03:18:51
702	1273	5	164	2025-03-13 18:29:05
782	1382	4	262	2024-10-24 23:06:58
484	477	4	163	2025-04-01 08:52:50
1	1104	4	234	2024-11-27 12:22:40
668	690	7	216	2025-01-06 15:37:50
651	863	7	109	2024-06-14 00:18:53
753	1130	8	125	2024-05-02 08:24:25
134	613	9	156	2025-02-08 21:18:54
254	674	2	232	2025-02-01 18:04:46
324	857	9	188	2024-09-22 19:11:28
77	998	4	320	2024-09-22 13:27:53
362	151	5	392	2024-06-08 02:49:04
218	306	5	192	2024-09-08 18:03:12
272	1013	4	375	2025-01-07 10:33:51
188	729	4	53	2024-08-09 22:37:21
60	935	5	239	2024-11-13 23:20:23
59	248	1	152	2024-10-25 23:05:48
630	258	9	202	2025-02-21 06:32:50
682	337	6	311	2024-07-16 09:29:45
336	592	1	324	2024-07-04 22:06:16
396	314	6	155	2025-02-23 07:15:42
251	1390	7	289	2024-12-10 08:48:34
519	810	3	119	2024-06-03 11:28:29
615	352	4	58	2024-12-24 02:18:49
487	145	10	118	2024-07-07 09:08:48
59	22	3	67	2024-07-27 21:30:44
427	211	10	50	2024-09-20 15:16:35
78	1261	7	182	2024-09-23 19:38:11
193	1373	6	23	2024-06-19 19:22:31
652	349	7	370	2024-08-21 23:47:07
65	71	8	394	2024-10-02 07:57:02
584	747	1	128	2025-03-01 11:30:18
164	1155	8	67	2025-01-14 03:43:47
309	354	6	297	2025-03-22 13:21:53
445	710	1	224	2024-05-03 15:09:18
416	983	10	100	2025-01-29 14:53:37
339	1174	5	102	2024-05-16 09:50:59
767	481	5	55	2025-02-04 09:31:13
575	1033	6	271	2025-03-22 18:47:47
314	904	2	239	2025-04-03 06:31:21
476	643	1	210	2025-02-17 07:40:02
339	196	5	371	2024-04-17 17:10:42
530	1216	5	47	2024-11-01 23:21:34
162	1138	9	189	2025-03-15 05:53:22
554	766	6	55	2024-05-29 11:43:17
340	523	8	97	2025-02-13 10:29:45
128	44	2	122	2024-05-06 08:11:13
279	1370	9	262	2024-04-30 18:05:36
43	477	4	163	2025-03-29 15:59:05
384	1164	7	391	2024-11-27 12:10:41
164	509	3	226	2024-11-09 19:19:44
766	17	8	105	2024-11-06 19:20:39
35	535	5	312	2024-07-01 11:01:46
211	220	5	224	2024-10-04 00:26:05
333	114	7	144	2024-10-11 10:43:25
464	364	6	76	2024-09-25 10:20:44
300	1483	4	123	2025-03-14 00:24:22
7	1004	9	266	2025-03-08 01:28:33
136	189	8	169	2024-09-24 13:23:59
717	852	1	2	2024-05-23 04:47:16
608	945	4	184	2024-06-25 23:42:15
43	1072	6	272	2024-10-30 18:24:26
213	835	8	322	2024-07-29 20:48:06
9	227	2	134	2025-03-05 16:42:32
421	1434	7	44	2024-11-30 03:11:29
457	792	1	139	2025-01-11 21:00:47
64	1009	10	315	2024-10-13 07:20:41
157	259	9	202	2024-08-21 07:06:47
107	274	2	244	2024-08-22 14:19:50
290	1112	2	320	2024-12-07 10:57:43
332	1085	6	187	2024-05-30 09:39:11
660	270	8	324	2024-12-18 06:52:22
616	731	1	235	2024-08-09 06:09:36
174	335	6	1	2025-03-03 18:31:48
604	1141	8	140	2024-12-25 23:51:54
314	716	6	350	2024-07-21 04:13:37
208	705	1	29	2025-02-03 20:20:48
310	835	8	322	2025-03-14 04:10:51
199	675	2	232	2024-10-08 00:51:26
373	1263	6	178	2025-02-21 12:45:38
75	99	1	242	2024-04-29 01:26:07
264	166	8	248	2024-06-03 22:54:48
157	633	8	228	2024-08-01 01:59:12
664	221	5	224	2024-10-04 11:29:06
51	114	7	144	2024-04-26 03:17:55
145	216	5	353	2024-06-01 14:51:27
371	1437	1	184	2025-01-04 13:50:08
346	741	1	334	2024-07-25 20:39:29
423	216	5	353	2024-08-23 15:48:06
679	1470	6	341	2024-06-22 12:22:51
322	243	10	246	2024-09-03 21:46:35
20	334	6	1	2025-02-05 01:52:30
153	1253	6	373	2024-06-10 12:27:15
94	82	4	292	2024-12-04 05:54:00
228	673	2	232	2024-10-02 10:39:36
731	934	9	117	2024-10-26 21:16:51
627	127	10	166	2024-12-07 20:35:18
135	627	5	254	2025-02-02 17:23:41
549	41	3	251	2024-11-05 21:30:29
91	250	1	152	2024-09-08 05:23:51
153	1467	3	328	2024-10-12 15:55:35
307	557	4	338	2024-11-26 08:25:12
299	913	10	191	2024-05-24 15:42:13
140	1042	9	299	2024-06-01 20:01:33
587	1200	2	389	2024-09-24 18:17:27
431	427	6	379	2024-04-22 02:31:38
48	679	6	202	2024-10-10 20:15:58
369	1073	9	170	2024-10-04 20:08:36
780	791	2	163	2024-04-24 10:40:14
342	1313	10	255	2024-09-05 19:41:31
714	1087	7	120	2024-04-28 21:20:28
100	825	4	399	2025-02-26 06:33:24
294	127	10	166	2024-06-16 18:35:33
322	303	2	353	2024-06-26 13:47:08
120	869	9	48	2024-12-12 14:49:10
661	326	7	346	2024-09-06 05:53:16
132	882	10	101	2024-06-09 00:23:45
476	1450	7	336	2024-04-11 01:47:57
61	353	6	297	2024-08-19 04:44:10
240	130	6	48	2024-07-13 03:20:32
198	572	1	270	2024-09-01 14:21:35
97	119	1	239	2024-10-19 02:06:46
286	1484	4	123	2025-01-01 21:37:09
626	1279	3	139	2024-07-20 05:49:01
358	715	1	7	2024-12-21 21:09:27
284	545	7	198	2025-02-11 05:15:00
138	719	5	266	2024-05-09 20:16:02
693	1320	8	384	2024-07-18 06:31:47
709	875	4	257	2025-01-31 08:08:29
502	475	5	144	2024-05-02 10:08:18
172	1309	1	262	2024-07-02 04:44:20
154	345	5	299	2025-01-26 20:21:33
270	1173	5	102	2024-12-26 03:55:37
613	1053	1	178	2025-01-11 18:14:45
250	1257	8	23	2025-03-21 22:10:22
167	1091	9	241	2024-05-03 05:29:11
74	992	1	320	2024-12-04 19:59:19
433	923	7	77	2024-06-10 14:53:46
449	1338	2	93	2025-03-01 03:14:27
15	874	4	257	2024-09-20 15:23:14
86	484	3	157	2025-04-01 15:02:19
310	1200	2	389	2024-04-10 14:48:14
344	507	10	355	2024-12-12 10:36:18
265	1464	6	176	2024-12-19 19:14:31
481	12	4	284	2024-08-16 22:11:29
629	1416	3	399	2025-01-09 17:04:35
737	1004	9	266	2024-11-18 21:23:08
624	653	9	72	2024-05-29 21:17:13
276	336	6	311	2025-03-20 20:59:31
317	27	1	105	2024-07-30 08:19:42
240	935	5	239	2024-10-26 00:29:08
158	1089	3	37	2024-07-20 17:25:37
674	296	5	328	2024-06-24 03:13:43
529	418	3	287	2024-09-20 22:14:03
130	229	2	134	2024-09-27 19:37:37
37	514	6	78	2025-04-03 04:56:45
617	1121	3	215	2024-11-05 16:05:31
230	925	7	330	2024-09-14 11:58:33
22	993	1	320	2024-08-02 22:24:36
393	1447	8	189	2024-11-18 14:52:56
767	7	5	250	2024-12-02 20:12:09
390	814	4	137	2024-06-08 07:47:22
444	531	10	222	2025-01-17 09:36:02
367	1089	3	37	2024-11-15 23:26:28
313	333	6	1	2024-11-27 18:24:18
552	113	7	144	2024-05-08 20:35:08
51	790	2	163	2024-12-13 23:41:49
51	1237	10	32	2024-09-18 16:36:41
193	425	10	208	2024-05-13 21:40:36
638	36	10	308	2024-05-15 02:18:35
385	20	8	194	2024-06-11 01:30:39
205	89	5	44	2024-07-18 09:47:20
798	1158	4	135	2024-07-29 13:20:34
499	1302	2	87	2024-07-02 19:17:14
350	1377	1	256	2024-09-29 14:41:35
783	734	7	1	2024-10-10 16:59:56
707	582	2	338	2024-04-16 04:28:58
100	1455	6	285	2024-05-03 17:00:28
158	829	3	192	2025-03-23 12:40:30
367	1423	6	389	2024-11-11 17:22:27
768	804	10	240	2024-06-18 07:52:00
784	1337	2	93	2024-08-11 07:19:22
320	382	8	280	2024-08-13 00:35:42
593	575	7	213	2025-01-04 02:39:31
41	21	3	67	2024-09-21 12:45:54
244	155	6	279	2024-07-24 04:21:14
1	1313	10	255	2024-07-01 02:49:16
361	578	7	312	2024-08-29 00:10:30
771	624	8	102	2024-08-28 06:39:23
212	739	5	100	2024-10-05 07:37:47
41	461	9	60	2024-05-13 19:02:59
114	1349	7	329	2025-02-17 05:33:34
463	976	7	85	2024-07-21 15:44:40
510	106	9	177	2024-06-12 09:45:24
9	152	5	392	2024-11-17 14:28:27
534	453	7	221	2024-06-24 19:06:09
335	490	4	101	2025-01-25 20:27:24
114	763	8	287	2024-12-08 04:45:52
288	1385	10	122	2024-04-23 16:45:56
247	312	5	339	2024-07-24 03:42:04
632	746	1	128	2024-09-02 23:53:22
325	230	7	316	2024-12-27 01:14:35
764	886	5	212	2024-06-02 19:04:44
180	1206	10	309	2024-12-17 04:20:10
574	1298	6	240	2025-01-29 22:50:00
426	899	5	32	2024-10-28 23:04:51
276	773	2	321	2024-04-08 15:22:14
138	75	6	32	2024-12-20 04:47:47
104	1183	4	99	2024-12-10 03:54:46
84	1194	9	399	2024-12-31 02:51:34
96	363	6	76	2025-03-01 17:53:38
110	953	5	391	2025-03-10 02:12:41
492	977	4	2	2024-12-31 06:16:43
53	1016	6	21	2024-08-17 11:25:23
116	773	2	321	2024-09-24 01:35:04
115	603	2	204	2024-10-10 04:08:25
382	551	8	81	2025-02-15 01:53:25
218	769	9	62	2024-07-24 08:23:02
264	840	10	41	2025-02-08 12:03:55
203	454	8	375	2024-08-25 22:18:02
303	762	8	287	2024-12-01 18:00:20
377	1456	6	285	2024-04-23 12:40:17
657	160	1	212	2025-01-16 10:59:07
213	975	7	85	2024-07-05 14:24:45
2	1430	4	169	2024-09-17 08:47:23
477	1330	6	348	2025-01-21 04:20:52
182	516	6	363	2024-09-20 08:45:27
149	418	3	287	2024-08-17 15:03:14
383	145	10	118	2024-05-31 22:23:20
428	463	9	60	2024-11-11 09:25:35
162	1460	9	77	2024-10-31 21:44:39
444	568	2	171	2024-06-15 03:36:39
456	355	3	161	2024-12-26 23:01:17
288	501	10	16	2024-12-24 13:35:20
258	414	2	25	2024-10-18 20:02:02
184	1076	6	264	2025-03-18 10:11:34
349	521	8	97	2024-12-13 07:20:41
243	1328	7	382	2024-05-15 07:18:20
462	893	7	258	2024-09-29 12:39:06
246	445	3	357	2024-10-14 10:58:33
337	1451	7	336	2024-07-14 00:59:32
60	580	9	41	2024-05-19 20:23:44
258	85	3	248	2024-09-13 03:16:39
475	290	8	184	2024-06-09 10:48:16
606	683	10	321	2024-06-18 14:30:56
19	172	8	32	2024-08-29 15:29:40
222	1255	8	382	2024-04-29 15:16:28
336	694	2	168	2024-11-10 15:42:05
185	440	10	5	2024-08-25 13:11:38
193	949	3	386	2024-04-12 04:05:42
305	490	4	101	2024-12-16 23:50:40
22	415	8	6	2025-02-06 16:30:23
217	330	7	92	2025-01-25 06:52:52
210	1004	9	266	2024-06-04 17:59:38
202	161	1	212	2024-10-15 12:50:10
539	1199	2	185	2024-08-28 07:56:16
213	299	10	254	2025-03-24 18:39:44
354	79	3	282	2025-01-11 08:23:12
171	58	1	176	2024-11-02 05:44:45
764	458	2	48	2024-04-19 00:12:16
290	610	5	41	2024-06-15 11:18:41
316	1114	9	196	2024-06-29 23:22:23
198	1343	3	337	2024-12-21 06:29:57
417	111	6	397	2024-05-24 11:47:05
290	957	2	271	2024-05-08 19:20:36
12	414	2	25	2025-01-21 06:51:02
427	742	1	334	2024-05-13 01:36:56
690	104	8	178	2024-12-18 11:41:54
247	95	9	125	2025-03-10 07:05:34
141	524	8	155	2024-08-12 04:04:59
164	542	10	385	2024-08-20 16:27:21
319	1307	4	14	2024-05-06 10:36:57
256	123	6	384	2025-03-22 19:52:54
227	1035	8	36	2025-03-11 03:35:14
126	305	5	192	2024-11-01 20:50:23
35	1396	1	249	2025-02-14 19:46:26
360	205	2	107	2024-07-15 05:03:39
559	837	6	27	2024-07-11 09:01:32
427	198	3	60	2024-06-13 09:35:58
686	287	1	16	2024-05-15 12:38:58
242	1188	2	186	2024-05-31 00:47:21
718	1336	2	93	2024-05-12 03:58:13
16	947	3	386	2025-02-18 05:15:36
655	30	3	104	2024-05-30 01:56:33
362	439	7	278	2024-07-30 07:25:23
313	964	5	28	2025-03-16 14:45:50
303	719	5	266	2025-01-09 19:36:46
121	443	4	288	2025-03-11 16:37:18
31	1440	2	108	2024-08-14 15:10:02
555	666	8	271	2024-09-11 14:57:07
17	277	2	14	2025-03-29 18:26:47
792	1095	6	143	2024-07-24 22:30:21
611	1196	10	202	2024-09-15 13:11:43
548	248	1	152	2024-10-20 10:26:49
538	872	6	115	2024-11-10 19:41:18
252	1453	2	159	2024-10-01 16:14:47
444	1281	9	284	2024-05-07 21:36:36
79	624	8	102	2024-07-31 19:08:54
373	1486	1	10	2024-12-19 12:38:35
137	65	5	364	2024-12-17 07:23:32
369	1451	7	336	2024-12-24 10:20:39
139	80	3	282	2024-07-31 15:13:41
171	26	3	212	2024-05-15 07:54:39
70	736	10	392	2024-06-26 07:09:35
272	238	10	299	2025-03-20 05:17:16
664	135	6	158	2024-04-18 06:13:02
402	90	7	98	2024-04-29 19:52:43
152	1149	6	330	2024-11-29 05:26:25
459	1158	4	135	2024-07-03 08:16:23
738	1284	1	147	2025-01-08 23:06:03
37	2	10	214	2024-07-29 09:19:32
16	1288	7	399	2024-08-18 11:51:28
81	652	9	72	2025-03-05 19:04:56
423	351	4	58	2024-08-07 03:47:31
360	173	2	56	2024-06-02 09:27:23
409	251	1	257	2024-07-30 09:14:20
343	1047	1	49	2025-02-21 09:50:42
500	619	10	27	2024-07-27 19:53:23
193	1282	9	284	2024-09-20 02:57:07
529	251	1	257	2025-02-28 20:55:36
300	734	7	1	2024-09-14 04:34:33
298	1012	4	375	2024-05-17 07:24:35
80	1090	3	37	2025-02-01 17:54:22
781	1411	8	377	2024-11-26 12:38:22
174	501	10	16	2024-08-14 06:49:50
563	91	7	98	2024-12-30 15:49:21
296	1218	7	100	2024-06-05 11:36:58
300	692	8	38	2024-07-21 21:45:40
203	1200	2	389	2024-11-10 15:49:48
513	313	6	155	2024-08-21 14:46:01
132	1041	9	299	2025-01-21 16:20:18
\.


--
-- TOC entry 3441 (class 0 OID 16709)
-- Dependencies: 222
-- Data for Name: exitrecord; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.exitrecord (personid, deviceid, zoneid, gymid, exittime) FROM stdin;
790	789	2	387	2024-11-05 08:47:40
686	1103	4	234	2024-10-24 23:59:00
81	505	10	355	2024-04-26 03:18:26
290	1160	5	373	2024-12-31 04:18:32
124	367	1	14	2024-12-03 07:31:10
67	167	3	170	2024-07-07 03:33:13
250	997	4	320	2024-04-26 23:59:00
598	1043	9	299	2024-07-18 23:06:08
83	1265	1	384	2024-06-04 16:03:29
392	83	4	292	2024-11-24 15:29:48
274	1224	6	335	2025-04-01 14:00:24
74	290	8	184	2024-07-11 23:59:00
145	369	9	39	2024-05-06 23:59:00
124	844	3	257	2024-09-19 11:03:44
202	722	2	314	2024-09-27 14:00:56
139	1008	6	378	2024-05-22 21:36:11
6	545	7	198	2024-12-25 11:05:54
6	1366	4	223	2025-03-15 16:16:20
120	559	10	150	2024-06-19 15:30:39
537	1443	7	52	2024-12-20 17:07:14
276	427	6	379	2024-06-08 22:43:49
36	515	6	363	2024-05-19 14:14:37
501	100	1	242	2024-04-12 05:17:55
147	222	5	224	2025-02-20 17:13:31
578	619	10	27	2025-01-12 15:29:11
203	330	7	92	2025-02-11 23:59:00
245	158	3	211	2024-04-29 09:33:15
32	815	8	328	2024-08-02 04:37:39
119	930	6	203	2024-09-15 10:12:08
199	488	4	146	2025-03-28 14:19:57
118	597	1	197	2025-02-26 13:16:35
276	578	7	312	2024-07-22 10:59:51
363	740	5	100	2024-11-22 23:59:00
236	864	8	283	2025-03-16 23:59:00
141	320	8	313	2024-05-20 16:50:58
370	69	2	90	2025-02-07 07:06:49
128	1189	2	186	2024-10-01 18:55:40
788	971	8	72	2024-09-18 07:15:39
284	1224	6	335	2024-12-11 15:27:40
155	89	5	44	2024-11-15 23:59:00
573	212	10	50	2024-10-13 05:33:00
550	1204	9	116	2024-12-11 15:58:12
247	900	5	32	2024-08-01 11:38:01
98	1411	8	377	2024-05-21 18:52:32
223	265	3	253	2025-02-17 11:44:52
161	1234	10	347	2024-12-26 08:24:28
224	1097	4	86	2025-03-15 20:46:54
772	1451	7	336	2024-07-22 23:59:00
10	55	2	209	2024-06-16 03:46:06
469	267	3	17	2024-10-06 16:17:55
60	507	10	355	2024-08-12 05:23:13
156	884	5	212	2024-12-29 23:59:00
203	1379	7	279	2025-04-02 16:58:59
208	177	2	51	2024-04-17 12:59:31
242	489	4	101	2024-06-30 09:18:53
8	1061	9	122	2024-07-29 19:38:34
125	38	2	397	2025-02-20 15:13:54
223	449	7	347	2024-07-02 22:50:54
718	354	6	297	2024-10-29 02:25:29
2	1021	10	37	2024-08-22 14:09:31
268	580	9	41	2024-07-11 16:27:29
46	1385	10	122	2024-05-30 18:59:27
207	339	8	380	2024-05-21 09:33:49
485	1205	9	116	2024-06-07 23:59:00
670	6	5	250	2025-01-03 23:59:00
462	1001	3	238	2025-03-21 23:59:00
155	993	1	320	2024-12-08 22:11:49
14	1437	1	184	2024-11-05 04:37:19
585	252	1	257	2024-09-29 13:10:36
331	569	6	163	2025-01-23 16:35:49
343	334	6	1	2024-08-28 14:32:45
233	989	9	264	2024-07-03 11:11:00
67	309	6	352	2024-10-24 19:53:05
522	8	5	250	2024-05-03 09:31:31
196	1018	6	21	2024-05-04 14:43:03
393	149	1	19	2024-06-21 23:59:00
80	923	7	77	2025-03-06 05:55:33
317	1092	9	241	2024-11-18 06:48:50
709	1315	10	373	2025-01-23 16:51:24
359	603	2	204	2024-06-01 23:59:00
663	840	10	41	2024-08-06 04:09:29
711	1148	6	330	2024-05-17 18:17:49
625	534	5	312	2024-04-15 12:32:07
376	1080	1	70	2024-09-25 01:58:32
261	1387	10	122	2024-07-22 01:46:14
650	612	1	228	2024-10-19 15:22:48
227	363	6	76	2024-07-26 14:52:12
232	949	3	386	2024-05-30 22:20:20
109	201	4	49	2024-10-10 15:09:20
385	599	1	197	2024-05-25 14:22:47
354	405	2	361	2024-07-30 14:59:50
569	1281	9	284	2024-07-09 05:53:35
371	323	8	386	2025-02-15 12:40:26
64	1329	7	382	2024-10-08 12:29:11
332	286	1	16	2025-01-08 21:40:30
492	763	8	287	2025-02-22 20:51:22
537	839	10	41	2024-12-16 15:40:01
713	311	5	339	2024-04-21 14:24:21
17	1256	8	23	2024-10-29 05:44:55
441	1325	3	142	2024-04-03 06:54:12
672	1273	5	164	2024-07-25 13:50:44
799	72	8	394	2024-10-09 11:09:23
91	667	8	271	2024-04-05 02:43:37
553	266	3	253	2024-12-30 23:19:35
27	1444	3	43	2024-10-30 12:07:47
99	462	9	60	2025-01-16 18:02:18
70	1459	2	216	2025-01-17 18:32:56
210	1435	5	146	2024-11-16 10:21:44
569	93	5	340	2025-03-06 08:44:48
704	895	7	96	2024-07-01 23:59:00
285	1074	9	170	2025-01-08 04:36:52
155	534	5	312	2024-04-03 05:12:58
125	933	9	117	2024-05-11 01:49:35
475	286	1	16	2024-09-04 08:35:43
134	72	8	394	2024-11-01 10:15:35
604	1332	6	348	2024-09-11 06:11:47
58	1459	2	216	2025-01-30 18:12:02
51	443	4	288	2024-12-27 09:49:19
92	535	5	312	2024-11-02 14:48:25
44	856	2	206	2024-09-25 12:58:02
547	1061	9	122	2024-04-22 14:59:55
235	916	7	371	2024-07-21 09:31:16
162	685	4	238	2024-05-23 18:19:57
83	1345	3	337	2024-06-01 03:56:54
427	18	8	194	2024-04-09 09:30:10
620	1245	3	98	2024-08-02 13:31:44
266	801	7	375	2024-11-04 01:10:12
81	1165	7	391	2025-01-03 14:17:21
353	1411	8	377	2024-12-28 11:40:43
13	859	3	178	2024-11-15 21:53:31
736	845	3	257	2025-01-21 14:57:25
490	657	8	157	2025-02-06 07:49:17
689	254	7	165	2024-06-20 08:20:18
223	137	2	32	2024-04-04 09:02:20
334	434	10	329	2025-02-16 07:14:04
263	74	6	32	2024-07-04 02:31:15
257	1043	9	299	2024-11-27 22:48:01
127	475	5	144	2024-07-17 06:24:09
629	1002	9	266	2025-03-21 20:03:25
666	407	2	361	2024-11-07 22:14:56
231	12	4	284	2024-10-11 17:30:37
127	1097	4	86	2024-07-11 11:30:52
683	313	6	155	2024-08-14 13:58:12
629	114	7	144	2025-02-05 04:03:56
127	1303	2	87	2024-07-26 14:14:37
789	1180	8	388	2024-09-19 15:01:53
651	301	9	209	2024-06-17 21:32:31
175	1438	1	184	2025-02-28 23:59:00
208	158	3	211	2025-02-17 15:44:58
783	89	5	44	2024-10-23 23:59:00
137	125	10	166	2024-04-30 13:54:40
457	1291	5	394	2025-04-01 19:52:08
127	462	9	60	2024-04-16 23:48:57
61	115	7	144	2024-06-02 14:28:49
561	726	5	148	2024-09-05 23:59:00
258	965	3	398	2024-10-14 05:22:52
760	519	7	186	2025-01-18 17:13:11
396	648	6	393	2024-05-15 02:48:52
275	675	2	232	2025-02-03 15:56:03
64	1022	10	37	2024-11-23 23:59:00
446	1038	7	327	2024-05-21 11:26:49
170	648	6	393	2025-03-26 18:33:55
51	1016	6	21	2024-12-28 22:02:13
553	1199	2	185	2024-08-26 11:49:08
312	291	8	184	2025-03-16 06:14:13
161	1324	8	193	2024-10-27 07:27:53
116	314	6	155	2025-01-17 22:54:21
125	917	9	37	2024-07-22 09:07:46
105	1333	9	175	2024-10-04 09:52:24
118	608	5	41	2024-07-16 09:13:10
28	565	7	43	2025-01-20 05:42:30
9	1036	8	36	2024-08-05 14:45:36
80	1040	10	131	2025-03-07 15:31:45
286	1314	10	373	2025-01-06 15:41:15
14	915	7	371	2024-05-17 13:26:32
342	1269	7	265	2024-06-03 17:06:01
408	655	2	132	2024-08-18 23:59:00
261	125	10	166	2024-09-05 09:01:23
59	320	8	313	2024-11-03 23:21:54
108	802	4	188	2024-06-24 10:31:59
286	909	10	143	2024-08-11 03:31:46
152	209	4	62	2024-06-28 18:38:34
193	502	10	16	2025-03-16 03:42:22
11	819	8	78	2024-08-26 23:31:52
201	720	2	314	2024-08-04 19:40:46
292	59	6	288	2024-11-15 04:43:21
300	1090	3	37	2024-05-09 18:16:28
715	463	9	60	2024-09-08 15:43:32
297	803	4	188	2024-12-28 14:32:25
82	1004	9	266	2024-12-11 07:57:18
72	1297	6	240	2025-03-19 14:10:23
650	442	4	288	2025-01-11 16:30:26
791	406	2	361	2025-02-26 14:26:38
48	740	5	100	2025-03-19 17:36:15
15	625	5	254	2025-03-23 05:34:27
220	1308	4	14	2025-03-22 13:26:23
517	738	5	100	2024-12-27 12:53:21
366	1301	4	168	2024-12-10 13:33:10
469	826	4	399	2025-02-20 21:50:43
167	995	6	383	2024-09-29 18:06:56
214	840	10	41	2025-02-26 15:50:28
716	781	3	148	2024-07-26 23:59:00
389	1419	6	184	2024-05-15 22:47:59
140	1041	9	299	2024-06-14 18:46:39
667	1368	4	321	2024-09-08 14:29:13
411	1477	2	354	2024-07-08 18:23:26
699	341	5	35	2024-11-02 07:01:43
786	801	7	375	2024-09-19 04:33:21
23	567	2	171	2024-11-26 23:07:34
757	985	10	100	2024-05-27 18:08:29
122	325	7	346	2025-03-11 14:55:11
371	694	2	168	2024-07-13 20:56:11
28	144	5	379	2024-07-20 06:27:43
91	1042	9	299	2024-08-27 17:05:45
112	1034	8	36	2024-10-31 09:42:53
360	403	9	90	2024-11-12 18:51:23
239	740	5	100	2025-02-07 17:51:55
322	228	2	134	2024-05-16 22:45:46
28	1082	4	237	2024-04-16 05:30:36
282	1345	3	337	2024-12-07 05:56:44
251	730	4	53	2024-05-29 10:13:59
54	1136	9	372	2024-07-02 10:54:28
320	104	8	178	2024-07-18 12:31:55
321	210	10	50	2024-12-10 16:07:58
690	1462	6	176	2024-09-16 09:37:36
138	143	5	379	2024-07-28 19:49:10
571	989	9	264	2025-02-06 19:11:03
329	373	7	293	2024-04-20 22:48:27
190	275	2	14	2024-09-02 23:57:17
358	1330	6	348	2024-04-04 08:42:02
66	833	9	327	2024-11-07 05:58:09
190	787	2	387	2024-08-08 06:31:44
8	1406	8	92	2024-12-16 15:23:31
53	582	2	338	2024-04-24 06:13:17
270	309	6	352	2024-04-03 06:10:40
52	1185	2	178	2024-12-25 05:19:54
109	477	4	163	2024-04-19 13:11:45
305	645	8	297	2025-01-19 14:35:02
82	678	6	202	2024-05-20 23:28:20
285	1282	9	284	2024-11-12 09:02:08
398	9	5	186	2025-03-23 23:59:00
375	666	8	271	2024-12-11 17:22:50
65	1018	6	21	2024-09-13 12:54:15
258	721	2	314	2024-10-27 09:01:33
246	1029	7	366	2025-02-17 23:59:00
375	1075	9	170	2025-02-17 09:56:45
222	1154	2	101	2025-03-06 09:39:16
160	1051	3	379	2025-01-18 08:11:37
658	902	1	307	2024-10-01 18:31:27
281	1128	10	356	2024-07-06 19:24:21
505	743	5	105	2024-12-12 23:59:00
306	573	1	270	2024-12-29 19:42:48
250	584	3	384	2024-10-20 12:25:56
288	1466	3	328	2024-05-21 08:55:22
349	398	5	90	2024-08-07 16:38:42
472	634	8	228	2024-09-03 04:01:36
153	328	5	279	2024-08-29 21:14:52
707	639	4	259	2024-04-08 09:26:00
644	49	5	288	2024-08-20 06:32:11
487	1333	9	175	2024-10-06 02:22:07
275	111	6	397	2024-06-28 23:59:00
45	786	5	86	2024-11-23 04:38:40
747	397	6	340	2025-01-02 08:51:04
538	687	4	170	2024-05-23 08:10:54
19	1321	8	384	2025-02-12 03:05:27
792	1169	1	264	2025-03-15 14:26:34
333	960	7	351	2024-06-21 17:03:50
274	7	5	250	2025-01-17 12:03:19
504	435	10	329	2025-03-10 18:06:49
108	696	2	168	2024-09-11 17:32:13
387	776	6	300	2025-02-09 21:47:47
83	1118	2	317	2025-02-15 12:23:16
373	1255	8	382	2025-02-24 01:57:31
34	752	7	171	2024-11-03 04:17:27
342	1082	4	237	2024-11-30 06:44:39
189	467	5	189	2025-02-07 23:59:00
218	238	10	299	2025-03-16 05:54:01
64	1398	1	249	2024-05-23 22:46:45
347	282	8	350	2024-04-07 18:15:58
295	290	8	184	2024-12-31 17:58:37
368	340	8	380	2024-08-27 10:13:52
720	1248	9	10	2024-09-18 12:56:11
365	163	1	158	2024-05-04 12:21:57
641	1101	7	51	2025-02-11 14:45:43
354	657	8	157	2024-09-04 23:13:34
281	1466	3	328	2024-09-22 16:10:29
398	677	3	24	2025-02-12 13:01:21
41	545	7	198	2024-09-15 05:10:31
113	191	8	169	2024-08-14 11:21:21
560	683	10	321	2024-10-21 23:59:00
366	1055	3	177	2024-04-02 17:56:35
539	1108	8	115	2024-10-06 23:55:32
383	1479	10	68	2024-05-10 15:35:22
616	1016	6	21	2025-02-10 11:03:54
151	446	3	171	2025-03-15 08:53:05
786	1061	9	122	2024-11-11 23:51:20
245	587	10	312	2024-12-09 14:34:31
338	696	2	168	2024-11-08 21:10:10
101	835	8	322	2024-08-11 16:11:09
479	163	1	158	2025-02-08 19:08:23
161	613	9	156	2024-05-02 05:35:06
197	1049	1	49	2024-08-06 22:16:46
393	1033	6	271	2025-01-06 11:37:54
66	415	8	6	2024-04-21 04:06:15
279	1423	6	389	2025-02-22 14:22:55
41	1197	10	202	2025-02-04 21:35:53
753	416	8	6	2024-07-27 23:59:00
273	124	6	384	2024-06-11 09:00:42
308	203	2	107	2024-07-21 07:32:33
657	1122	3	215	2024-04-04 09:17:01
798	629	3	298	2025-02-25 04:03:08
653	17	8	105	2025-01-30 05:08:00
397	970	7	378	2025-03-03 15:05:53
585	830	3	192	2024-08-16 18:30:03
454	1342	2	6	2025-02-27 21:07:44
295	550	8	81	2024-09-18 13:06:05
331	422	5	95	2025-02-01 21:17:44
473	212	10	50	2024-12-06 07:26:35
714	985	10	100	2024-10-06 11:30:27
7	805	10	240	2024-05-09 04:28:26
261	620	10	27	2024-04-24 11:02:34
556	558	4	338	2024-10-27 23:59:00
103	666	8	271	2024-10-06 10:07:51
100	529	8	378	2024-08-30 15:45:58
33	1287	7	399	2025-01-13 05:55:59
165	189	8	169	2024-12-10 23:59:00
778	311	5	339	2024-05-06 06:24:31
277	875	4	257	2024-07-24 12:47:33
66	1072	6	272	2025-01-17 19:29:57
564	1290	5	394	2024-08-23 17:43:47
693	109	1	33	2025-03-29 04:29:55
364	429	7	231	2025-01-27 18:21:56
600	936	5	239	2025-01-23 09:14:30
73	422	5	95	2024-11-18 14:31:46
1	1122	3	215	2024-12-03 17:03:54
266	987	9	79	2024-07-31 13:58:41
378	891	10	204	2024-12-30 19:09:30
319	660	4	376	2025-02-04 16:38:24
340	230	7	316	2024-11-14 23:59:00
36	377	5	214	2024-11-07 18:39:23
243	426	10	208	2024-07-09 11:03:54
339	937	7	64	2024-07-28 13:31:40
362	910	10	143	2024-06-11 22:33:12
212	1094	6	143	2024-12-31 05:50:24
772	663	10	149	2025-02-16 15:51:36
750	601	8	305	2024-10-23 23:59:00
679	136	2	32	2024-08-04 09:24:30
114	107	9	177	2025-01-19 06:43:14
444	652	9	72	2024-05-27 21:10:56
142	14	8	310	2024-05-14 23:59:00
88	353	6	297	2024-06-19 18:10:46
131	741	1	334	2024-12-21 16:14:35
680	1209	7	159	2025-03-10 19:08:03
91	433	2	393	2024-07-29 23:59:00
599	1181	8	388	2024-09-19 21:09:23
291	784	5	86	2025-01-09 12:34:14
552	43	9	61	2025-03-22 17:57:03
77	1003	9	266	2024-07-14 04:09:14
29	1006	8	301	2024-05-09 02:30:49
66	305	5	192	2024-04-15 05:17:42
1	1108	8	115	2025-03-15 16:08:30
265	1132	8	125	2024-08-17 11:27:38
63	771	2	321	2024-10-16 13:36:58
607	972	8	72	2025-02-01 06:30:13
179	1251	6	373	2024-11-01 08:23:50
201	615	9	156	2025-03-04 22:56:10
150	1366	4	223	2025-02-13 15:53:52
248	467	5	189	2024-06-15 11:43:38
489	81	3	282	2024-04-05 06:18:51
702	1274	5	164	2025-03-13 20:15:05
782	1382	4	262	2024-10-24 23:39:58
484	477	4	163	2025-04-01 09:15:50
1	1103	4	234	2024-11-27 16:43:40
668	690	7	216	2025-01-06 19:08:50
651	863	7	109	2024-06-14 00:43:53
753	1132	8	125	2024-05-02 12:39:25
134	613	9	156	2025-02-08 21:28:54
254	673	2	232	2025-02-01 19:55:46
324	858	9	188	2024-09-23 23:59:00
77	997	4	320	2024-09-22 13:36:53
362	151	5	392	2024-06-08 03:43:04
218	306	5	192	2024-09-08 18:55:12
272	1012	4	375	2025-01-07 14:21:51
188	728	4	53	2024-08-10 23:59:00
60	935	5	239	2024-11-13 23:39:23
59	248	1	152	2024-10-26 23:59:00
630	259	9	202	2025-02-21 08:48:50
682	336	6	311	2024-07-16 10:38:45
336	591	1	324	2024-07-04 22:48:16
396	314	6	155	2025-02-23 10:11:42
251	1390	7	289	2024-12-10 12:38:34
519	810	3	119	2024-06-03 14:04:29
615	352	4	58	2024-12-24 04:55:49
487	146	10	118	2024-07-07 09:38:48
59	21	3	67	2024-07-27 22:21:44
427	212	10	50	2024-09-20 20:13:35
78	1261	7	182	2024-09-23 20:15:11
193	1372	6	23	2024-06-19 20:30:31
652	348	7	370	2024-08-22 23:59:00
65	73	8	394	2024-10-02 12:36:02
584	747	1	128	2025-03-01 13:59:18
164	1156	8	67	2025-01-14 06:20:47
309	353	6	297	2025-03-22 14:54:53
445	710	1	224	2024-05-03 19:58:18
416	985	10	100	2025-01-29 19:07:37
339	1174	5	102	2024-05-16 13:41:59
767	482	5	55	2025-02-04 09:44:13
575	1032	6	271	2025-03-22 19:41:47
314	906	2	239	2025-04-03 08:21:21
476	643	1	210	2025-02-17 07:41:02
339	195	5	371	2024-04-17 20:25:42
530	1216	5	47	2024-11-01 23:54:34
162	1139	9	189	2025-03-15 07:05:22
554	765	6	55	2024-05-29 14:10:17
340	522	8	97	2025-02-13 10:45:45
128	45	2	122	2024-05-06 12:43:13
279	1371	9	262	2024-04-30 19:51:36
43	476	4	163	2025-03-29 18:50:05
384	1164	7	391	2024-11-27 15:49:41
164	508	3	226	2024-11-09 23:38:44
766	17	8	105	2024-11-06 23:36:39
35	535	5	312	2024-07-01 15:03:46
211	220	5	224	2024-10-04 01:26:05
333	113	7	144	2024-10-11 11:51:25
464	365	6	76	2024-09-25 13:14:44
300	1483	4	123	2025-03-14 00:50:22
7	1002	9	266	2025-03-08 04:23:33
136	191	8	169	2024-09-24 16:09:59
717	852	1	2	2024-05-23 08:43:16
608	945	4	184	2024-06-26 23:59:00
43	1072	6	272	2024-10-30 21:53:26
213	835	8	322	2024-07-29 21:41:06
9	229	2	134	2025-03-05 19:49:32
421	1433	7	44	2024-11-30 04:21:29
457	793	1	139	2025-01-12 23:59:00
64	1011	10	315	2024-10-13 08:35:41
157	259	9	202	2024-08-21 07:35:47
107	272	2	244	2024-08-22 18:07:50
290	1111	2	320	2024-12-07 12:11:43
332	1085	6	187	2024-05-30 10:07:11
660	271	8	324	2024-12-18 11:11:22
616	731	1	235	2024-08-09 06:40:36
174	334	6	1	2025-03-03 19:18:48
604	1141	8	140	2024-12-26 23:59:00
314	716	6	350	2024-07-21 04:21:37
208	707	1	29	2025-02-03 22:43:48
310	836	8	322	2025-03-14 07:47:51
199	675	2	232	2024-10-08 02:43:26
373	1264	6	178	2025-02-21 17:44:38
75	100	1	242	2024-04-29 02:51:07
264	164	8	248	2024-06-04 23:59:00
157	634	8	228	2024-08-01 05:08:12
664	220	5	224	2024-10-04 15:27:06
51	113	7	144	2024-04-26 06:48:55
145	216	5	353	2024-06-01 19:08:27
371	1438	1	184	2025-01-04 15:47:08
346	742	1	334	2024-07-25 23:37:29
423	216	5	353	2024-08-23 17:21:06
679	1470	6	341	2024-06-22 17:01:51
322	243	10	246	2024-09-04 23:59:00
20	333	6	1	2025-02-05 06:34:30
153	1252	6	373	2024-06-10 16:09:15
94	83	4	292	2024-12-04 06:14:00
228	674	2	232	2024-10-02 15:11:36
731	934	9	117	2024-10-27 23:59:00
627	126	10	166	2024-12-08 23:59:00
135	625	5	254	2025-02-02 20:37:41
549	40	3	251	2024-11-05 23:36:29
91	250	1	152	2024-09-08 09:43:51
153	1466	3	328	2024-10-12 16:55:35
307	558	4	338	2024-11-26 13:06:12
299	914	10	191	2024-05-24 18:14:13
140	1043	9	299	2024-06-01 21:58:33
587	1200	2	389	2024-09-24 22:43:27
431	428	6	379	2024-04-22 04:31:38
48	679	6	202	2024-10-10 23:03:58
369	1075	9	170	2024-10-05 23:59:00
780	791	2	163	2024-04-24 12:50:14
342	1313	10	255	2024-09-05 22:49:31
714	1088	7	120	2024-04-29 23:59:00
100	825	4	399	2025-02-26 11:25:24
294	127	10	166	2024-06-16 21:33:33
322	304	2	353	2024-06-26 18:19:08
120	868	9	48	2024-12-12 18:43:10
661	326	7	346	2024-09-06 07:09:16
132	882	10	101	2024-06-09 02:37:45
476	1451	7	336	2024-04-11 05:31:57
61	353	6	297	2024-08-19 05:19:10
240	130	6	48	2024-07-13 05:32:32
198	573	1	270	2024-09-01 18:14:35
97	120	1	239	2024-10-19 03:58:46
286	1484	4	123	2025-01-02 23:59:00
626	1280	3	139	2024-07-20 06:14:01
358	715	1	7	2024-12-21 21:55:27
284	546	7	198	2025-02-11 06:59:00
138	719	5	266	2024-05-10 23:59:00
693	1321	8	384	2024-07-18 11:13:47
709	875	4	257	2025-01-31 12:37:29
502	475	5	144	2024-05-02 13:36:18
172	1311	1	262	2024-07-02 08:39:20
154	345	5	299	2025-01-27 23:59:00
270	1173	5	102	2024-12-26 07:50:37
613	1053	1	178	2025-01-11 19:03:45
250	1258	8	23	2025-03-21 22:20:22
167	1092	9	241	2024-05-03 05:39:11
74	993	1	320	2024-12-04 21:47:19
433	924	7	77	2024-06-10 18:11:46
449	1336	2	93	2025-03-01 06:24:27
15	874	4	257	2024-09-20 19:00:14
86	486	3	157	2025-04-01 16:32:19
310	1202	2	389	2024-04-10 17:54:14
344	507	10	355	2024-12-12 14:51:18
265	1464	6	176	2024-12-19 23:46:31
481	12	4	284	2024-08-17 23:59:00
629	1416	3	399	2025-01-09 18:39:35
737	1003	9	266	2024-11-18 22:12:08
624	654	9	72	2024-05-29 22:22:13
276	338	6	311	2025-03-20 21:00:31
317	27	1	105	2024-07-30 09:56:42
240	935	5	239	2024-10-26 04:04:08
158	1090	3	37	2024-07-20 18:51:37
674	296	5	328	2024-06-24 07:44:43
529	419	3	287	2024-09-20 23:12:03
130	228	2	134	2024-09-27 19:46:37
37	513	6	78	2025-04-03 09:22:45
617	1121	3	215	2024-11-05 16:09:31
230	927	7	330	2024-09-14 16:01:33
22	991	1	320	2024-08-03 23:59:00
393	1447	8	189	2024-11-18 19:15:56
767	7	5	250	2024-12-02 23:04:09
390	814	4	137	2024-06-08 08:56:22
444	532	10	222	2025-01-17 12:06:02
367	1090	3	37	2024-11-16 23:59:00
313	335	6	1	2024-11-27 20:12:18
552	114	7	144	2024-05-09 23:59:00
51	790	2	163	2024-12-14 23:59:00
51	1239	10	32	2024-09-18 16:51:41
193	425	10	208	2024-05-14 23:59:00
638	36	10	308	2024-05-15 05:35:35
385	18	8	194	2024-06-11 01:35:39
205	89	5	44	2024-07-18 13:50:20
798	1159	4	135	2024-07-29 14:21:34
499	1303	2	87	2024-07-02 23:38:14
350	1376	1	256	2024-09-29 15:11:35
783	734	7	1	2024-10-10 19:19:56
707	582	2	338	2024-04-16 05:20:58
100	1456	6	285	2024-05-03 21:13:28
158	830	3	192	2025-03-23 14:44:30
367	1423	6	389	2024-11-11 17:44:27
768	804	10	240	2024-06-18 08:18:00
784	1337	2	93	2024-08-11 08:09:22
320	382	8	280	2024-08-13 02:53:42
593	576	7	213	2025-01-04 02:54:31
41	21	3	67	2024-09-21 13:13:54
244	155	6	279	2024-07-24 05:42:14
1	1312	10	255	2024-07-01 05:33:16
361	578	7	312	2024-08-29 05:07:30
771	623	8	102	2024-08-28 09:45:23
212	740	5	100	2024-10-05 08:39:47
41	462	9	60	2024-05-13 21:46:59
114	1350	7	329	2025-02-17 06:09:34
463	976	7	85	2024-07-21 18:54:40
510	106	9	177	2024-06-12 11:47:24
9	153	5	392	2024-11-17 15:19:27
534	452	7	221	2024-06-24 21:24:09
335	489	4	101	2025-01-25 23:52:24
114	762	8	287	2024-12-08 05:26:52
288	1385	10	122	2024-04-23 17:50:56
247	311	5	339	2024-07-24 06:27:04
632	746	1	128	2024-09-03 23:59:00
325	231	7	316	2024-12-27 05:59:35
764	884	5	212	2024-06-02 23:55:44
180	1207	10	309	2024-12-17 07:10:10
574	1298	6	240	2025-01-30 23:59:00
426	901	5	32	2024-10-28 23:21:51
276	773	2	321	2024-04-08 17:15:14
138	75	6	32	2024-12-20 05:13:47
104	1182	4	99	2024-12-10 06:57:46
84	1193	9	399	2024-12-31 07:51:34
96	364	6	76	2025-03-01 21:35:38
110	953	5	391	2025-03-10 02:55:41
492	977	4	2	2024-12-31 07:39:43
53	1016	6	21	2024-08-17 14:50:23
116	773	2	321	2024-09-24 06:16:04
115	602	2	204	2024-10-10 09:04:25
382	549	8	81	2025-02-15 04:55:25
218	770	9	62	2024-07-24 12:14:02
264	840	10	41	2025-02-08 14:35:55
203	454	8	375	2024-08-26 23:59:00
303	762	8	287	2024-12-01 18:05:20
377	1456	6	285	2024-04-23 16:02:17
657	160	1	212	2025-01-16 14:40:07
213	976	7	85	2024-07-05 17:25:45
2	1430	4	169	2024-09-17 10:04:23
477	1330	6	348	2025-01-21 08:55:52
182	516	6	363	2024-09-20 13:01:27
149	419	3	287	2024-08-17 19:28:14
383	146	10	118	2024-05-31 23:24:20
428	463	9	60	2024-11-11 13:33:35
162	1461	9	77	2024-11-01 23:59:00
444	567	2	171	2024-06-15 06:27:39
456	357	3	161	2024-12-27 23:59:00
288	502	10	16	2024-12-24 14:06:20
258	413	2	25	2024-10-19 23:59:00
184	1077	6	264	2025-03-18 11:52:34
349	523	8	97	2024-12-13 07:22:41
243	1327	7	382	2024-05-15 07:42:20
462	894	7	258	2024-09-29 13:38:06
246	445	3	357	2024-10-14 15:38:33
337	1451	7	336	2024-07-14 02:51:32
60	579	9	41	2024-05-19 22:28:44
258	85	3	248	2024-09-13 04:08:39
475	291	8	184	2024-06-09 11:29:16
606	682	10	321	2024-06-18 18:16:56
19	170	8	32	2024-08-29 19:49:40
222	1255	8	382	2024-04-29 19:40:28
336	696	2	168	2024-11-10 19:25:05
185	441	10	5	2024-08-25 16:03:38
193	949	3	386	2024-04-12 08:34:42
305	489	4	101	2024-12-17 23:59:00
22	415	8	6	2025-02-06 17:39:23
217	330	7	92	2025-01-25 08:30:52
210	1002	9	266	2024-06-04 18:46:38
202	161	1	212	2024-10-15 17:32:10
539	1199	2	185	2024-08-28 10:34:16
213	300	10	254	2025-03-24 20:15:44
354	81	3	282	2025-01-11 08:33:12
171	56	1	176	2024-11-02 05:58:45
764	460	2	48	2024-04-19 04:55:16
290	608	5	41	2024-06-15 11:49:41
316	1115	9	196	2024-06-29 23:34:23
198	1344	3	337	2024-12-21 07:18:57
417	111	6	397	2024-05-24 14:03:05
290	958	2	271	2024-05-08 20:57:36
12	414	2	25	2025-01-21 08:46:02
427	741	1	334	2024-05-13 04:03:56
690	103	8	178	2024-12-18 15:48:54
247	96	9	125	2025-03-10 12:03:34
141	525	8	155	2024-08-12 05:12:59
164	542	10	385	2024-08-20 19:39:21
319	1308	4	14	2024-05-06 13:01:57
256	123	6	384	2025-03-22 21:55:54
227	1036	8	36	2025-03-11 04:52:14
126	307	5	192	2024-11-01 23:11:23
35	1397	1	249	2025-02-14 22:30:26
360	203	2	107	2024-07-15 06:53:39
559	838	6	27	2024-07-11 10:26:32
427	199	3	60	2024-06-13 09:48:58
686	286	1	16	2024-05-15 14:28:58
242	1187	2	186	2024-05-31 05:09:21
718	1337	2	93	2024-05-12 07:54:13
16	947	3	386	2025-02-18 05:55:36
655	30	3	104	2024-05-30 02:16:33
362	438	7	278	2024-07-30 09:35:23
313	964	5	28	2025-03-16 16:02:50
303	718	5	266	2025-01-09 21:57:46
121	442	4	288	2025-03-11 18:33:18
31	1439	2	108	2024-08-14 15:19:02
555	668	8	271	2024-09-11 19:43:07
17	275	2	14	2025-03-29 21:10:47
792	1093	6	143	2024-07-25 23:59:00
611	1195	10	202	2024-09-15 15:25:43
548	250	1	152	2024-10-20 13:24:49
538	873	6	115	2024-11-11 23:59:00
252	1453	2	159	2024-10-01 16:23:47
444	1282	9	284	2024-05-07 22:18:36
79	623	8	102	2024-07-31 22:25:54
373	1485	1	10	2024-12-19 13:36:35
137	65	5	364	2024-12-17 12:06:32
369	1449	7	336	2024-12-24 15:16:39
139	81	3	282	2024-07-31 15:15:41
171	25	3	212	2024-05-15 10:48:39
70	737	10	392	2024-06-26 07:19:35
272	239	10	299	2025-03-20 09:43:16
664	134	6	158	2024-04-18 07:23:02
402	91	7	98	2024-04-29 21:56:43
152	1148	6	330	2024-11-29 07:13:25
459	1158	4	135	2024-07-03 10:25:23
738	1284	1	147	2025-01-09 23:59:00
37	2	10	214	2024-07-29 09:27:32
16	1288	7	399	2024-08-18 13:30:28
81	653	9	72	2025-03-05 22:54:56
423	351	4	58	2024-08-07 04:40:31
360	174	2	56	2024-06-02 12:43:23
409	251	1	257	2024-07-30 10:19:20
343	1048	1	49	2025-02-21 11:26:42
500	620	10	27	2024-07-27 22:51:23
193	1282	9	284	2024-09-20 06:30:07
529	252	1	257	2025-03-01 23:59:00
300	735	7	1	2024-09-14 05:21:33
298	1012	4	375	2024-05-17 10:10:35
80	1089	3	37	2025-02-01 22:03:22
781	1411	8	377	2024-11-26 13:09:22
174	501	10	16	2024-08-14 10:27:50
563	92	7	98	2024-12-30 20:39:21
296	1218	7	100	2024-06-05 16:15:58
300	693	8	38	2024-07-22 23:59:00
203	1202	2	389	2024-11-10 19:35:48
513	313	6	155	2024-08-21 15:18:01
132	1043	9	299	2025-01-21 17:35:18
14	1438	1	184	2024-11-05 03:19:19
175	1437	1	184	2025-02-27 21:37:40
371	1437	1	184	2025-01-04 14:20:08
790	788	2	387	2024-11-05 07:39:55.108446
290	1162	5	373	2024-12-31 05:48:08.715137
250	998	4	320	2024-04-26 00:07:27.375717
598	1042	9	299	2024-07-18 21:48:56.560291
83	1266	1	384	2024-06-04 12:15:53.465375
392	82	4	292	2024-11-24 17:08:44.334656
274	1223	6	335	2025-04-01 15:12:46.351714
145	370	9	39	2024-05-05 22:59:54.947048
124	845	3	257	2024-09-19 11:06:55.673038
202	721	2	314	2024-09-27 11:06:57.55383
139	1007	6	378	2024-05-22 19:39:00.572706
6	1367	4	223	2025-03-15 15:22:19.45125
537	1441	7	52	2024-12-20 14:15:34.021512
276	428	6	379	2024-06-08 23:25:27.95261
501	98	1	242	2024-04-12 04:25:36.220478
147	221	5	224	2025-02-20 15:18:08.808391
119	928	6	203	2024-09-15 07:52:50.358924
118	598	1	197	2025-02-26 12:11:06.544366
363	738	5	100	2024-11-22 01:06:32.740975
141	322	8	313	2024-05-20 13:48:12.411373
370	68	2	90	2025-02-07 06:29:02.578524
788	972	8	72	2024-09-18 03:14:46.682947
550	1205	9	116	2024-12-11 17:38:03.198999
98	1412	8	377	2024-05-21 16:25:38.982088
161	1236	10	347	2024-12-26 07:17:50.570996
10	54	2	209	2024-06-16 01:24:36.792345
60	505	10	355	2024-08-12 01:07:49.507468
203	1381	7	279	2025-04-02 16:13:07.141436
208	176	2	51	2024-04-17 11:06:52.572704
8	1059	9	122	2024-07-29 20:36:21.565314
125	39	2	397	2025-02-20 14:01:48.186427
2	1022	10	37	2024-08-22 10:55:12.676852
207	340	8	380	2024-05-21 06:37:07.475443
485	1203	9	116	2024-06-07 00:34:00.726514
670	8	5	250	2025-01-02 23:06:19.260018
155	991	1	320	2024-12-08 22:58:11.298685
585	251	1	257	2024-09-29 14:41:14.714662
343	335	6	1	2024-08-28 15:36:09.604425
522	7	5	250	2024-05-03 08:59:28.601296
393	150	1	19	2024-06-20 22:07:51.451839
80	924	7	77	2025-03-06 06:40:46.304693
359	602	2	204	2024-05-31 23:23:59.584843
663	841	10	41	2024-08-06 03:09:12.19787
711	1149	6	330	2024-05-17 16:27:33.364076
625	533	5	312	2024-04-15 08:22:16.913397
227	364	6	76	2024-07-26 12:18:51.340268
109	202	4	49	2024-10-10 12:08:18.954011
385	598	1	197	2024-05-25 12:19:11.611714
569	1282	9	284	2024-07-09 04:07:07.42721
64	1327	7	382	2024-10-08 10:51:09.61553
332	287	1	16	2025-01-08 20:29:31.404933
17	1258	8	23	2024-10-29 06:34:30.905759
672	1272	5	164	2024-07-25 13:30:27.571529
91	668	8	271	2024-04-05 04:12:08.266219
553	264	3	253	2024-12-31 00:06:05.097764
99	463	9	60	2025-01-16 16:38:29.777666
704	896	7	96	2024-06-30 23:59:29.188772
285	1075	9	170	2025-01-08 04:02:27.17832
155	535	5	312	2024-04-03 04:02:54.890957
475	287	1	16	2024-09-04 07:18:23.890069
134	71	8	394	2024-11-01 08:52:23.44294
58	1458	2	216	2025-01-30 14:00:45.905835
162	684	4	238	2024-05-23 18:19:46.876687
83	1343	3	337	2024-06-01 01:19:06.896094
81	1163	7	391	2025-01-03 12:58:18.675278
13	860	3	178	2024-11-15 20:01:55.249979
490	659	8	157	2025-02-06 06:43:47.526055
689	253	7	165	2024-06-20 08:21:19.995628
223	136	2	32	2024-04-04 04:45:16.651037
257	1042	9	299	2024-11-27 22:29:36.698543
127	474	5	144	2024-07-17 06:48:58.178781
666	406	2	361	2024-11-07 20:41:06.456532
629	115	7	144	2025-02-05 02:36:36.437078
127	1302	2	87	2024-07-26 10:11:47.746042
789	1181	8	388	2024-09-19 12:04:31.200204
208	157	3	211	2025-02-17 12:09:38.663594
561	727	5	148	2024-09-04 21:57:06.4953
760	520	7	186	2025-01-18 15:56:08.219058
396	649	6	393	2024-05-15 03:43:09.74698
275	674	2	232	2025-02-03 12:34:15.408592
64	1023	10	37	2024-11-22 22:48:11.119386
170	649	6	393	2025-03-26 14:23:38.531085
312	290	8	184	2025-03-16 06:15:28.587985
161	1323	8	193	2024-10-27 06:02:13.378268
116	313	6	155	2025-01-17 19:23:55.140736
125	918	9	37	2024-07-22 07:09:46.683465
105	1334	9	175	2024-10-04 10:20:08.178016
118	610	5	41	2024-07-16 09:14:43.012776
28	566	7	43	2025-01-20 05:04:28.758876
80	1039	10	131	2025-03-07 13:37:42.452642
342	1268	7	265	2024-06-03 16:35:45.294745
408	656	2	132	2024-08-17 22:17:55.598241
286	911	10	143	2024-08-11 04:34:14.527387
11	818	8	78	2024-08-26 20:39:21.540873
292	60	6	288	2024-11-15 03:17:08.464659
297	802	4	188	2024-12-28 12:28:02.644786
48	738	5	100	2025-03-19 16:40:35.351071
15	626	5	254	2025-03-23 03:23:48.181943
517	739	5	100	2024-12-27 13:23:12.166762
366	1300	4	168	2024-12-10 09:30:59.626231
167	994	6	383	2024-09-29 19:44:54.639339
667	1369	4	321	2024-09-08 12:42:50.590241
699	343	5	35	2024-11-02 04:39:26.031616
786	800	7	375	2024-09-19 02:54:30.714112
757	984	10	100	2024-05-27 15:09:55.712522
371	695	2	168	2024-07-13 19:08:13.729106
28	142	5	379	2024-07-20 05:32:53.534936
91	1043	9	299	2024-08-27 15:01:51.776424
112	1036	8	36	2024-10-31 08:19:02.334257
322	227	2	134	2024-05-16 19:10:56.296367
28	1084	4	237	2024-04-16 06:18:13.916039
282	1343	3	337	2024-12-07 07:09:41.638523
251	729	4	53	2024-05-29 06:43:27.704746
320	103	8	178	2024-07-18 12:28:17.049433
138	144	5	379	2024-07-28 16:59:28.745368
571	990	9	264	2025-02-06 16:49:42.211621
190	276	2	14	2024-09-03 00:30:19.552342
66	834	9	327	2024-11-07 04:00:18.102987
8	1407	8	92	2024-12-16 13:29:02.971209
53	583	2	338	2024-04-24 06:15:32.788101
270	308	6	352	2024-04-03 07:51:38.714095
109	478	4	163	2024-04-19 11:10:16.396583
285	1283	9	284	2024-11-12 06:36:13.47239
65	1016	6	21	2024-09-13 13:00:01.207944
258	720	2	314	2024-10-27 05:23:56.67879
246	1031	7	366	2025-02-17 01:08:13.482708
375	1073	9	170	2025-02-17 08:35:40.215804
160	1052	3	379	2025-01-18 06:42:24.652776
505	744	5	105	2024-12-12 01:16:24.807742
306	572	1	270	2024-12-29 20:19:32.768556
288	1467	3	328	2024-05-21 08:55:13.905215
472	633	8	228	2024-09-03 03:37:19.904388
707	641	4	259	2024-04-08 10:19:50.089275
487	1335	9	175	2024-10-06 02:03:02.895674
45	785	5	86	2024-11-23 01:22:03.595847
538	686	4	170	2024-05-23 04:45:21.180273
19	1320	8	384	2025-02-12 02:39:29.427112
792	1168	1	264	2025-03-15 10:54:34.613272
333	959	7	351	2024-06-21 14:28:28.129658
504	436	10	329	2025-03-10 15:53:29.299079
108	695	2	168	2024-09-11 14:45:30.983396
387	777	6	300	2025-02-09 21:39:32.413645
83	1117	2	317	2025-02-15 13:29:08.270874
34	751	7	171	2024-11-03 03:21:29.847188
218	239	10	299	2025-03-16 05:25:25.415812
347	281	8	350	2024-04-07 16:48:21.150911
295	291	8	184	2024-12-31 14:08:58.721542
720	1249	9	10	2024-09-18 09:26:22.390269
281	1467	3	328	2024-09-22 14:04:16.492195
41	546	7	198	2024-09-15 05:56:03.37226
539	1110	8	115	2024-10-07 00:54:33.7343
383	1480	10	68	2024-05-10 14:36:12.632258
616	1017	6	21	2025-02-10 09:17:09.173575
151	447	3	171	2025-03-15 07:19:37.725617
786	1060	9	122	2024-11-11 23:57:30.064035
245	589	10	312	2024-12-09 12:04:59.799268
338	695	2	168	2024-11-08 19:50:49.053279
101	836	8	322	2024-08-11 17:43:52.432306
161	614	9	156	2024-05-02 06:27:41.484995
41	1195	10	202	2025-02-04 17:30:06.852947
753	415	8	6	2024-07-26 22:34:40.09244
308	205	2	107	2024-07-21 07:41:49.451486
397	968	7	378	2025-03-03 11:49:08.036923
454	1341	2	6	2025-02-27 21:31:27.720198
331	421	5	95	2025-02-01 21:40:34.117714
714	984	10	100	2024-10-06 11:26:26.194438
7	804	10	240	2024-05-09 02:11:41.696698
556	556	4	338	2024-10-27 00:36:23.304856
103	667	8	271	2024-10-06 10:30:08.88757
100	528	8	378	2024-08-30 14:39:58.041145
165	190	8	169	2024-12-09 21:42:26.232297
277	874	4	257	2024-07-24 12:08:46.500402
66	1071	6	272	2025-01-17 15:40:07.749712
364	431	7	231	2025-01-27 17:59:16.795372
600	935	5	239	2025-01-23 06:35:11.104811
378	889	10	204	2024-12-30 16:06:28.468019
340	231	7	316	2024-11-13 21:14:52.084474
362	909	10	143	2024-06-11 22:50:34.074954
750	600	8	305	2024-10-22 22:37:01.721189
114	106	9	177	2025-01-19 06:06:00.859498
142	15	8	310	2024-05-13 22:35:38.088945
88	354	6	297	2024-06-19 14:24:20.036817
131	742	1	334	2024-12-21 16:05:28.76146
680	1208	7	159	2025-03-10 16:41:29.951021
91	432	2	393	2024-07-28 22:09:49.365059
291	786	5	86	2025-01-09 11:36:24.570657
552	42	9	61	2025-03-22 15:47:26.984708
77	1002	9	266	2024-07-14 04:46:02.152193
66	306	5	192	2024-04-15 04:23:38.655916
1	1110	8	115	2025-03-15 16:43:04.150029
265	1130	8	125	2024-08-17 09:22:47.519318
63	773	2	321	2024-10-16 13:51:35.391712
201	614	9	156	2025-03-04 20:43:41.667126
489	80	3	282	2024-04-05 04:48:44.424594
702	1273	5	164	2025-03-13 19:59:00.57968
1	1104	4	234	2024-11-27 13:02:52.409037
753	1130	8	125	2024-05-02 10:11:07.088983
254	674	2	232	2025-02-01 19:10:29.759269
324	857	9	188	2024-09-22 20:21:41.509835
77	998	4	320	2024-09-22 15:09:51.02494
272	1013	4	375	2025-01-07 12:19:30.036383
188	729	4	53	2024-08-10 00:03:41.455136
630	258	9	202	2025-02-21 07:36:25.138036
682	337	6	311	2024-07-16 10:19:42.612825
336	592	1	324	2024-07-04 23:24:05.030075
487	145	10	118	2024-07-07 10:50:55.380435
59	22	3	67	2024-07-27 22:11:31.033839
427	211	10	50	2024-09-20 16:25:49.756906
193	1373	6	23	2024-06-19 20:15:05.995011
652	349	7	370	2024-08-22 00:24:08.648774
65	71	8	394	2024-10-02 09:07:33.621966
164	1155	8	67	2025-01-14 05:00:36.051287
309	354	6	297	2025-03-22 15:13:38.893659
416	983	10	100	2025-01-29 16:49:06.027798
767	481	5	55	2025-02-04 10:44:17.963272
575	1033	6	271	2025-03-22 19:31:38.445133
314	904	2	239	2025-04-03 08:02:04.196259
339	196	5	371	2024-04-17 17:58:56.014425
162	1138	9	189	2025-03-15 07:12:49.360346
554	766	6	55	2024-05-29 12:46:58.992287
340	523	8	97	2025-02-13 11:24:41.500084
128	44	2	122	2024-05-06 08:41:22.409706
279	1370	9	262	2024-04-30 19:35:59.749452
43	477	4	163	2025-03-29 16:29:18.053005
164	509	3	226	2024-11-09 19:55:46.247171
333	114	7	144	2024-10-11 12:33:45.415487
464	364	6	76	2024-09-25 11:37:10.65523
7	1004	9	266	2025-03-08 02:42:02.453632
136	189	8	169	2024-09-24 15:02:38.696806
9	227	2	134	2025-03-05 18:11:12.054399
421	1434	7	44	2024-11-30 04:21:17.511413
457	792	1	139	2025-01-11 22:39:12.713365
64	1009	10	315	2024-10-13 07:52:36.378505
107	274	2	244	2024-08-22 15:01:39.064611
290	1112	2	320	2024-12-07 12:42:06.177901
660	270	8	324	2024-12-18 07:43:53.776305
174	335	6	1	2025-03-03 19:38:25.596502
208	705	1	29	2025-02-03 21:18:14.40418
310	835	8	322	2025-03-14 05:35:45.704349
373	1263	6	178	2025-02-21 13:58:21.846131
75	99	1	242	2024-04-29 02:35:52.92927
264	166	8	248	2024-06-03 23:43:39.659449
157	633	8	228	2024-08-01 02:34:57.493051
664	221	5	224	2024-10-04 12:20:00.141846
51	114	7	144	2024-04-26 04:35:51.622148
346	741	1	334	2024-07-25 22:34:16.316022
20	334	6	1	2025-02-05 03:10:49.705546
153	1253	6	373	2024-06-10 14:20:44.121714
94	82	4	292	2024-12-04 07:31:22.646862
228	673	2	232	2024-10-02 12:07:09.470806
627	127	10	166	2024-12-07 21:18:29.284974
135	627	5	254	2025-02-02 18:12:40.315354
549	41	3	251	2024-11-05 22:08:25.742696
153	1467	3	328	2024-10-12 17:13:43.824107
307	557	4	338	2024-11-26 08:56:50.72018
299	913	10	191	2024-05-24 17:25:40.607425
140	1042	9	299	2024-06-01 21:37:38.691426
431	427	6	379	2024-04-22 03:56:59.798552
369	1073	9	170	2024-10-04 21:37:07.747415
714	1087	7	120	2024-04-28 22:54:54.817343
322	303	2	353	2024-06-26 14:26:43.501976
120	869	9	48	2024-12-12 16:18:53.150428
476	1450	7	336	2024-04-11 03:39:29.920641
198	572	1	270	2024-09-01 15:42:31.862853
97	119	1	239	2024-10-19 03:45:38.481518
626	1279	3	139	2024-07-20 07:08:19.405121
284	545	7	198	2025-02-11 06:36:33.57952
693	1320	8	384	2024-07-18 07:55:58.935295
172	1309	1	262	2024-07-02 05:42:02.093845
250	1257	8	23	2025-03-21 23:46:42.531079
167	1091	9	241	2024-05-03 06:30:17.640157
74	992	1	320	2024-12-04 21:54:51.835879
433	923	7	77	2024-06-10 15:35:56.434764
449	1338	2	93	2025-03-01 04:53:47.617263
86	484	3	157	2025-04-01 16:05:12.910541
310	1200	2	389	2024-04-10 15:51:34.324684
737	1004	9	266	2024-11-18 22:58:32.746163
624	653	9	72	2024-05-29 22:43:36.171358
276	336	6	311	2025-03-20 21:50:51.987313
158	1089	3	37	2024-07-20 19:09:12.71123
529	418	3	287	2024-09-20 23:21:17.095579
130	229	2	134	2024-09-27 21:15:34.916002
37	514	6	78	2025-04-03 06:00:49.196024
230	925	7	330	2024-09-14 13:42:58.341179
22	993	1	320	2024-08-02 23:11:00.130092
444	531	10	222	2025-01-17 10:19:10.730157
367	1089	3	37	2024-11-16 00:22:18.246208
313	333	6	1	2024-11-27 19:01:47.129844
552	113	7	144	2024-05-08 22:34:40.746426
51	1237	10	32	2024-09-18 18:07:16.019186
385	20	8	194	2024-06-11 02:21:57.205583
798	1158	4	135	2024-07-29 14:26:37.228398
499	1302	2	87	2024-07-02 20:51:01.570357
350	1377	1	256	2024-09-29 16:21:34.515829
100	1455	6	285	2024-05-03 18:08:11.622084
158	829	3	192	2025-03-23 13:35:46.52432
593	575	7	213	2025-01-04 04:13:15.901732
1	1313	10	255	2024-07-01 03:57:25.595473
771	624	8	102	2024-08-28 08:06:25.094159
212	739	5	100	2024-10-05 08:54:44.250011
41	461	9	60	2024-05-13 20:32:24.627989
114	1349	7	329	2025-02-17 07:24:47.331153
9	152	5	392	2024-11-17 15:48:45.764113
534	453	7	221	2024-06-24 20:07:20.135935
335	490	4	101	2025-01-25 22:21:00.316022
114	763	8	287	2024-12-08 05:33:19.426386
247	312	5	339	2024-07-24 05:18:51.531537
325	230	7	316	2024-12-27 02:32:04.271127
764	886	5	212	2024-06-02 20:44:11.375809
180	1206	10	309	2024-12-17 04:52:43.1734
426	899	5	32	2024-10-28 23:44:25.574971
104	1183	4	99	2024-12-10 05:43:09.617535
84	1194	9	399	2024-12-31 03:23:30.843572
96	363	6	76	2025-03-01 19:06:51.652143
115	603	2	204	2024-10-10 05:27:28.961094
382	551	8	81	2025-02-15 02:50:40.105445
218	769	9	62	2024-07-24 10:03:45.405778
213	975	7	85	2024-07-05 16:21:18.646955
149	418	3	287	2024-08-17 16:15:57.931773
383	145	10	118	2024-06-01 00:00:03.714195
162	1460	9	77	2024-10-31 22:29:46.015244
444	568	2	171	2024-06-15 05:11:53.136024
456	355	3	161	2024-12-26 23:57:48.54489
288	501	10	16	2024-12-24 14:46:25.743484
258	414	2	25	2024-10-18 20:44:37.526518
184	1076	6	264	2025-03-18 11:12:52.928388
349	521	8	97	2024-12-13 08:56:59.504663
243	1328	7	382	2024-05-15 08:13:25.617466
462	893	7	258	2024-09-29 13:22:40.435531
60	580	9	41	2024-05-19 21:21:44.11911
475	290	8	184	2024-06-09 12:43:52.961329
606	683	10	321	2024-06-18 15:25:21.043563
19	172	8	32	2024-08-29 16:20:36.823138
336	694	2	168	2024-11-10 17:38:11.380669
185	440	10	5	2024-08-25 13:56:31.129584
305	490	4	101	2024-12-17 00:39:32.92418
210	1004	9	266	2024-06-04 19:15:32.274548
213	299	10	254	2025-03-24 19:40:41.910613
354	79	3	282	2025-01-11 09:34:12.647631
171	58	1	176	2024-11-02 07:04:33.274444
764	458	2	48	2024-04-19 01:42:35.113116
290	610	5	41	2024-06-15 12:55:51.604681
316	1114	9	196	2024-06-30 01:17:04.044445
198	1343	3	337	2024-12-21 07:29:43.563531
290	957	2	271	2024-05-08 20:30:06.207449
427	742	1	334	2024-05-13 02:40:11.920855
690	104	8	178	2024-12-18 13:29:43.003185
247	95	9	125	2025-03-10 08:52:20.534649
141	524	8	155	2024-08-12 05:51:42.187884
319	1307	4	14	2024-05-06 11:21:38.541919
227	1035	8	36	2025-03-11 05:24:34.039922
126	305	5	192	2024-11-01 21:35:00.492099
35	1396	1	249	2025-02-14 20:44:16.428187
360	205	2	107	2024-07-15 06:05:26.977847
559	837	6	27	2024-07-11 10:09:02.301694
427	198	3	60	2024-06-13 10:09:04.990315
686	287	1	16	2024-05-15 14:28:13.751366
242	1188	2	186	2024-05-31 01:28:38.300264
718	1336	2	93	2024-05-12 04:53:48.318871
362	439	7	278	2024-07-30 08:42:08.985437
303	719	5	266	2025-01-09 21:08:33.39741
121	443	4	288	2025-03-11 17:25:24.919706
31	1440	2	108	2024-08-14 16:40:12.301608
555	666	8	271	2024-09-11 15:39:35.371725
17	277	2	14	2025-03-29 19:30:19.589313
792	1095	6	143	2024-07-24 23:24:47.83711
611	1196	10	202	2024-09-15 14:38:23.076448
548	248	1	152	2024-10-20 12:19:35.457684
538	872	6	115	2024-11-10 21:00:19.504024
444	1281	9	284	2024-05-07 23:35:57.43961
79	624	8	102	2024-07-31 20:40:58.636513
373	1486	1	10	2024-12-19 14:28:56.433605
369	1451	7	336	2024-12-24 11:04:39.479033
139	80	3	282	2024-07-31 15:45:36.451497
171	26	3	212	2024-05-15 09:19:02.299615
70	736	10	392	2024-06-26 08:23:35.258321
272	238	10	299	2025-03-20 06:09:05.088315
664	135	6	158	2024-04-18 06:57:06.664539
402	90	7	98	2024-04-29 21:45:06.904619
152	1149	6	330	2024-11-29 07:24:04.92312
81	652	9	72	2025-03-05 20:55:43.967431
360	173	2	56	2024-06-02 10:44:35.322957
343	1047	1	49	2025-02-21 10:28:19.547237
500	619	10	27	2024-07-27 21:26:11.179312
529	251	1	257	2025-02-28 22:40:57.183487
300	734	7	1	2024-09-14 05:30:27.085171
80	1090	3	37	2025-02-01 18:52:26.341718
563	91	7	98	2024-12-30 17:29:47.640541
300	692	8	38	2024-07-21 22:20:45.157588
203	1200	2	389	2024-11-10 17:43:03.180202
132	1041	9	299	2025-01-21 17:04:07.719948
\.


--
-- TOC entry 3443 (class 0 OID 16753)
-- Dependencies: 224
-- Data for Name: gym; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.gym (gymid, name, gymlocation) FROM stdin;
1	StrengthStudio	Haifa
2	FlexFrenzy	Acre
3	PowerPulse	Tiberias
4	SweatSquad	Herzliya
5	FlexFlow	Haifa
6	CoreCraze	Tel Aviv
7	FitFury	Ashkelon
8	StrengthStudio	Ashkelon
9	SweatSizzle	Acre
10	PeakPower	Tiberias
11	SweatSculpt	Safed
12	StrengthStrong	Haifa
13	BodyBlast	Kfar Saba
14	CoreCircuit	Haifa
15	BodyBlast	Kfar Saba
16	BodyBoost	Petah Tikva
17	BodyBurn	Herzliya
18	CardioCrush	Beersheba
19	EliteEndurance	Beersheba
20	CardioCore	Kfar Saba
21	PeakPower	Herzliya
22	IronGrip	Jerusalem
23	CoreCircuit	Petah Tikva
24	SweatSculpt	Tel Aviv
25	FitFlex	Ashkelon
26	PowerPlay	Eilat
27	MuscleMania	Safed
28	SweatStorm	Jerusalem
29	StrengthStrong	Ashkelon
30	CardioCrush	Jerusalem
31	CoreCraze	Ramat Gan
32	FlexFrenzy	Kfar Saba
33	FitFusion	Bat Yam
34	PeakPulse	Rishon LeZion
35	BodyBlast	Netanya
36	PowerPump	Acre
37	PeakPulse	Petah Tikva
38	IronGrip	Safed
39	FlexFitness	Beersheba
40	StrengthZone	Netanya
41	CardioCraze	Ashdod
42	CoreCrush	Haifa
43	MuscleMagic	Eilat
44	GymRat	Netanya
45	PeakPerformance	Tiberias
46	FitForce	Ashdod
47	IronIntensity	Netanya
48	BodyBalance	Beersheba
49	EliteEnergy	Modi'in
50	GymGains	Jerusalem
51	FitFusion	Haifa
52	SweatSculpt	Jerusalem
54	CoreCircuit	Bat Yam
55	BodyBurn	Eilat
56	PowerPump	Eilat
57	GymGlory	Tiberias
58	BodyBurn	Netanya
59	CardioCrush	Modi'in
60	IronGrip	Kfar Saba
61	CardioCore	Eilat
62	PeakPower	Nahariya
63	FitFury	Safed
64	SweatStorm	Nahariya
65	PowerPump	Jerusalem
66	FlexFlow	Bat Yam
67	PowerPulse	Beersheba
68	EnduranceEdge	Herzliya
69	EliteEssence	Ramat Gan
70	BodyBalance	Ashdod
71	EliteEnergy	Tel Aviv
72	FlexFit	Tel Aviv
73	PowerPulse	Netanya
74	IronIntensity	Holon
75	BodyBalance	Modi'in
76	SweatWorks	Kfar Saba
77	PeakPulse	Tiberias
78	FlexFrenzy	Bat Yam
79	MuscleMania	Haifa
80	SweatSculpt	Holon
81	SweatStorm	Tel Aviv
82	StrengthStudio	Nahariya
83	CoreCircuit	Modi'in
84	PowerPump	Tel Aviv
85	PeakPerformance	Haifa
86	StrengthZone	Acre
87	FlexFrenzy	Netanya
88	FitForce	Petah Tikva
89	IronImpact	Ramat Gan
90	IronImpact	Holon
91	EnduranceElite	Ashkelon
92	CoreCircuit	Petah Tikva
93	SweatSculpt	Herzliya
94	CoreCircuit	Herzliya
95	CoreCircuit	Bat Yam
96	BodyBalance	Ashdod
97	EnduranceElite	Tiberias
98	MuscleMania	Tel Aviv
99	FlexFlow	Tiberias
100	FitForm	Kfar Saba
101	CardioCrush	Tel Aviv
102	SweatSculpt	Nahariya
103	BodyBlast	Petah Tikva
104	FlexFit	Eilat
105	BodyBalance	Jerusalem
106	IronIntensity	Nahariya
107	FlexFitness	Ramat Gan
108	FitZone	Ashdod
109	EnduranceEmpire	Bat Yam
110	EliteEssence	Bat Yam
111	EliteEndurance	Rishon LeZion
112	SweatSculpt	Tel Aviv
113	EliteEnergy	Tel Aviv
114	EliteEssence	Jerusalem
115	CardioCrush	Ashdod
116	FlexFit	Ramat Gan
117	EnduranceEdge	Beersheba
118	CoreCrush	Nahariya
119	FlexFlow	Tiberias
120	BodyBoost	Kfar Saba
121	PowerPump	Holon
122	BodyBurn	Jerusalem
123	BodyBlast	Jerusalem
124	CardioCore	Beersheba
125	FitForce	Beersheba
126	BodyBalance	Jerusalem
127	FitFusion	Ashkelon
128	SweatStorm	Holon
129	MuscleMania	Beersheba
130	CardioCrush	Jerusalem
131	IronGrip	Ashdod
132	FlexFrenzy	Ramat Gan
133	IronStrong	Ashdod
134	PowerPlay	Jerusalem
135	BodyBlast	Haifa
136	FitFury	Safed
137	FlexFit	Nahariya
138	SweatSculpt	Modi'in
139	PeakPerformance	Nahariya
140	PeakPower	Acre
141	SweatSquad	Haifa
142	FlexFit	Tel Aviv
143	FlexFlow	Nahariya
144	IronGrip	Safed
145	EnduranceEdge	Holon
146	EnduranceEmpire	Jerusalem
147	CardioCore	Haifa
148	EliteEssence	Ramat Gan
149	FitForce	Holon
150	FitForm	Ashdod
151	MuscleMania	Bat Yam
152	CoreCrush	Holon
153	BodyBlast	Ashdod
154	EliteEnergy	Holon
155	EnduranceElite	Eilat
156	EnduranceEmpire	Kfar Saba
157	FitFusion	Holon
158	EliteEnergy	Acre
159	FitForm	Tiberias
160	PeakPerformance	Modi'in
161	FitFusion	Jerusalem
162	PowerPlay	Rishon LeZion
163	GymGlory	Herzliya
164	EliteEssence	Ashdod
165	CoreCrush	Kfar Saba
166	PowerPulse	Nahariya
167	EnduranceEmpire	Ashdod
168	EnduranceElite	Holon
169	BodyBalance	Kfar Saba
170	IronStrong	Tel Aviv
171	EliteEndurance	Tiberias
172	StrengthZone	Bat Yam
173	IronStrong	Bat Yam
174	SweatSizzle	Kfar Saba
175	BodyBurn	Bat Yam
176	SweatSizzle	Beersheba
177	SweatStorm	Netanya
178	EliteEnergy	Holon
179	CoreCraze	Tiberias
180	BodyBoost	Acre
181	BodyBlast	Bat Yam
182	PowerPump	Rishon LeZion
183	SweatSquad	Rishon LeZion
184	FitForce	Ramat Gan
185	BodyBoost	Netanya
186	GymGlory	Eilat
187	FlexFitness	Rishon LeZion
188	PowerPulse	Modi'in
189	FitForce	Tiberias
190	FlexFlow	Kfar Saba
191	PowerPlay	Ashdod
192	FitFlex	Kfar Saba
193	BodyBurn	Bat Yam
194	GymGlory	Kfar Saba
195	FitFury	Ramat Gan
196	GymRat	Jerusalem
197	BodyBurn	Kfar Saba
198	IronImpact	Safed
199	CoreCircuit	Acre
200	FitFusion	Beersheba
201	GymRat	Modi'in
202	PowerPump	Bat Yam
203	SweatSculpt	Holon
204	EnduranceEmpire	Ashkelon
205	BodyBurn	Bat Yam
206	FlexFitness	Jerusalem
207	SweatSquad	Jerusalem
208	SweatSquad	Beersheba
209	IronIntensity	Jerusalem
210	PeakPulse	Ashdod
211	FitForm	Nahariya
212	BodyBlast	Tiberias
213	StrengthStrong	Kfar Saba
214	PeakPerformance	Petah Tikva
215	GymGlory	Jerusalem
216	FlexFlow	Petah Tikva
217	GymRat	Ramat Gan
218	EnduranceEdge	Kfar Saba
219	FitZone	Beersheba
220	SweatSizzle	Jerusalem
221	EnduranceElite	Tiberias
222	FitFusion	Beersheba
223	BodyBurn	Tel Aviv
224	EliteEndurance	Rishon LeZion
225	PowerPlay	Tiberias
226	GymRat	Bat Yam
227	StrengthStrong	Ashkelon
228	PowerPlay	Tiberias
229	FitForm	Herzliya
230	EliteEssence	Ashdod
232	MuscleMania	Ramat Gan
233	FlexFit	Beersheba
234	FlexFrenzy	Modi'in
235	EliteEndurance	Ramat Gan
236	IronGrip	Petah Tikva
237	MuscleMagic	Ashkelon
238	StrengthStudio	Holon
239	CardioCraze	Modi'in
240	CoreCrush	Bat Yam
241	EnduranceElite	Herzliya
242	IronGrip	Nahariya
243	IronIntensity	Tiberias
244	SweatShred	Beersheba
245	CoreCrush	Beersheba
246	StrengthZone	Jerusalem
247	CoreCraze	Netanya
248	EnduranceEmpire	Kfar Saba
249	FlexFlow	Herzliya
250	GymGlory	Netanya
251	PeakPower	Ashdod
252	CardioCraze	Nahariya
253	GymGains	Jerusalem
254	CardioCraze	Eilat
255	MuscleMagic	Acre
256	FitFlex	Rishon LeZion
257	EnduranceEmpire	Ashdod
258	FitForce	Modi'in
259	IronIntensity	Ashdod
260	IronIntensity	Ashdod
261	StrengthZone	Jerusalem
262	IronIntensity	Netanya
263	BodyBurn	Tel Aviv
264	CoreCrush	Safed
265	CardioCore	Haifa
266	MuscleMagic	Rishon LeZion
267	SweatStorm	Eilat
268	EnduranceEmpire	Ramat Gan
269	EnduranceEmpire	Ashdod
270	FitFusion	Holon
271	FlexFit	Petah Tikva
272	FlexFrenzy	Modi'in
273	FlexFlow	Herzliya
274	EnduranceEdge	Ashkelon
275	PeakPower	Kfar Saba
276	CardioCrush	Eilat
277	GymGlory	Tel Aviv
278	PeakPerformance	Herzliya
279	StrengthStudio	Safed
280	StrengthStudio	Petah Tikva
281	SweatSculpt	Ashkelon
282	EnduranceEmpire	Modi'in
284	IronGrip	Safed
285	BodyBalance	Beersheba
286	GymGains	Tiberias
287	BodyBoost	Acre
288	BodyBalance	Haifa
289	SweatShred	Ashkelon
290	FlexFit	Bat Yam
291	BodyBlast	Petah Tikva
292	SweatWorks	Modi'in
293	MuscleMax	Nahariya
294	FlexFit	Rishon LeZion
295	FitFury	Bat Yam
296	FitFlex	Rishon LeZion
297	FitFury	Netanya
298	EliteEnergy	Ashkelon
299	PeakPerformance	Acre
300	FitFusion	Beersheba
301	GymRat	Petah Tikva
302	PeakPerformance	Netanya
303	SweatSquad	Holon
304	FitFlex	Rishon LeZion
306	GymRat	Ashkelon
307	EliteEndurance	Rishon LeZion
308	FlexFit	Ashkelon
309	GymGains	Rishon LeZion
310	StrengthStrong	Eilat
311	FlexFlow	Holon
312	FitZone	Holon
313	SweatSquad	Kfar Saba
314	GymGlory	Ramat Gan
315	CardioCraze	Tiberias
316	CoreCircuit	Petah Tikva
317	FitForce	Jerusalem
318	SweatSculpt	Modi'in
319	IronGrip	Nahariya
320	BodyBalance	Herzliya
321	BodyBlast	Bat Yam
322	MuscleMania	Modi'in
323	StrengthStudio	Ramat Gan
324	EliteEssence	Eilat
325	StrengthStrong	Holon
326	SweatSquad	Haifa
327	FlexFlow	Safed
328	PeakPerformance	Ashdod
329	GymRat	Nahariya
330	SweatStorm	Ashkelon
331	EnduranceElite	Holon
332	FlexFlow	Eilat
333	PowerPlay	Haifa
334	PowerPlay	Bat Yam
335	MuscleMax	Eilat
336	PowerPump	Jerusalem
337	IronImpact	Tel Aviv
338	SweatStorm	Holon
339	SweatShred	Eilat
340	PowerPump	Jerusalem
341	BodyBoost	Haifa
342	SweatStorm	Beersheba
343	MuscleMax	Rishon LeZion
344	IronStrong	Haifa
345	PeakPerformance	Beersheba
346	CardioCraze	Modi'in
347	StrengthZone	Rishon LeZion
348	FlexFitness	Ramat Gan
349	CardioCrush	Modi'in
350	CoreCircuit	Safed
351	IronGrip	Netanya
352	StrengthStrong	Nahariya
353	SweatShred	Petah Tikva
354	EnduranceEdge	Eilat
355	SweatStorm	Kfar Saba
356	FitFusion	Netanya
357	EnduranceElite	Holon
358	SweatShred	Safed
359	FitForm	Bat Yam
360	FitFury	Rishon LeZion
361	CardioCore	Holon
362	SweatSculpt	Ashdod
363	EnduranceElite	Jerusalem
364	BodyBlast	Kfar Saba
365	SweatSculpt	Jerusalem
366	PeakPower	Nahariya
368	PeakPower	Ramat Gan
369	PeakPower	Ashkelon
370	IronIntensity	Tiberias
371	CardioCore	Safed
372	BodyBlast	Beersheba
373	PowerPulse	Holon
374	IronIntensity	Rishon LeZion
375	SweatSculpt	Herzliya
376	SweatWorks	Haifa
377	EliteEndurance	Petah Tikva
378	IronImpact	Haifa
379	PowerPump	Holon
380	SweatShred	Herzliya
381	EliteEssence	Jerusalem
382	PowerPump	Ashkelon
383	SweatSculpt	Ramat Gan
384	BodyBoost	Beersheba
385	IronStrong	Herzliya
386	SweatSquad	Nahariya
387	BodyBlast	Jerusalem
388	FlexFitness	Beersheba
389	CoreCraze	Herzliya
390	EliteEndurance	Ashdod
391	FitFusion	Safed
392	FlexFit	Nahariya
393	EliteEnergy	Tiberias
394	SweatSquad	Safed
395	BodyBlast	Haifa
396	GymRat	Modi'in
397	FlexFit	Beersheba
398	IronGrip	Holon
399	BodyBoost	Ashdod
400	BodyBlast	Ramat Gan
\.


--
-- TOC entry 3440 (class 0 OID 16681)
-- Dependencies: 221
-- Data for Name: maintenanceworker; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.maintenanceworker (personid, contactinfo, hiredate) FROM stdin;
401	holmesnicholas@ellison.com	2022-03-26
402	hillryan@mckinney.com	2022-08-21
403	tony49@gmail.com	2023-12-11
404	pbrown@gmail.com	2023-06-12
405	johnphillips@gmail.com	2021-07-04
406	andrew21@yahoo.com	2024-03-13
407	william43@yahoo.com	2022-10-16
408	pprice@yahoo.com	2021-01-10
409	gleach@hotmail.com	2020-07-01
410	ucohen@mosley.info	2020-10-09
411	iherrera@gmail.com	2023-02-15
412	cvalencia@yahoo.com	2021-12-30
413	christensenjames@murphy-oneill.com	2023-04-30
414	ikennedy@lee-henry.com	2022-06-21
415	gardnerdavid@brown-bryant.com	2021-05-13
416	browncasey@yahoo.com	2020-08-17
417	annhughes@yahoo.com	2021-08-02
418	taylorjones@graham.com	2022-02-19
419	rachel69@ortiz-williams.com	2021-12-22
420	mwiley@davidson.biz	2021-02-01
421	sbarry@gmail.com	2023-11-28
422	wshannon@charles.info	2020-09-08
423	erin62@gmail.com	2022-06-30
424	michellemitchell@mcdonald.com	2022-11-17
425	yscott@yahoo.com	2021-03-21
426	michael03@hunt-flores.com	2022-09-23
427	hillnancy@miller-hernandez.com	2021-05-02
428	davisjoanna@marks.biz	2023-06-27
429	michael90@rich.com	2023-10-13
430	robertcannon@yahoo.com	2022-03-10
431	kevinbaker@gmail.com	2021-06-13
432	robertlove@barton.com	2020-05-12
433	wperry@yahoo.com	2020-07-03
434	dianamiles@mahoney-thompson.com	2023-01-27
435	pmonroe@yahoo.com	2024-01-25
436	garciasandra@huerta.org	2023-02-08
437	mathewguzman@miller.com	2023-12-16
438	youngveronica@hotmail.com	2023-11-23
439	knightmichael@shaw-holmes.com	2023-01-01
440	wilsonrobert@yahoo.com	2021-11-29
441	hopkinsdawn@hotmail.com	2021-01-30
442	nicholasbarker@gmail.com	2022-01-26
443	uhubbard@henderson.com	2020-10-24
444	sjuarez@hotmail.com	2021-01-22
445	danielowens@gmail.com	2021-09-12
446	marymason@white.biz	2023-09-08
447	stevenbrennan@gmail.com	2022-01-08
448	kedwards@gmail.com	2022-09-18
449	emmapowell@hotmail.com	2024-01-20
450	rodney99@hotmail.com	2022-06-02
451	jimmysmith@yahoo.com	2023-08-15
452	luis75@gmail.com	2022-12-01
453	thomaswilson@hotmail.com	2020-10-15
454	mhall@larson.biz	2021-08-14
455	costabrandon@gmail.com	2022-03-17
456	robinsontiffany@gmail.com	2021-08-05
457	imartin@patterson.info	2023-09-06
458	gkennedy@gmail.com	2022-12-04
459	gilbertdennis@gutierrez.net	2021-10-04
460	milleramber@gmail.com	2020-12-14
461	bchapman@gmail.com	2020-12-16
462	alexandra72@hotmail.com	2021-01-03
463	jacksonamanda@reynolds.com	2022-05-16
464	adamlee@gmail.com	2023-03-17
465	ellisjoseph@hotmail.com	2021-10-16
466	angela93@hotmail.com	2020-05-28
467	michellejimenez@rhodes.net	2020-05-19
468	wayne83@smith-casey.net	2023-08-26
469	lineric@hotmail.com	2023-06-27
470	baileysally@hotmail.com	2023-02-16
471	christine98@hotmail.com	2024-02-08
472	kristie33@johnson.net	2021-05-23
473	wendy36@rodgers.org	2022-10-31
474	hyoung@oneal.com	2022-01-26
475	vancejesse@hotmail.com	2023-06-08
476	smithtara@lamb.com	2023-01-19
477	tphillips@hotmail.com	2022-06-26
478	scottmichael@martin.net	2024-01-24
479	linda88@yahoo.com	2023-12-02
480	regina26@roman.net	2023-03-15
481	sharon64@hotmail.com	2021-07-13
482	adrian16@hotmail.com	2023-06-28
483	dylanrowe@yahoo.com	2020-08-13
484	jon16@anderson-thompson.com	2023-07-23
485	kenneth24@gmail.com	2023-08-17
486	larryayala@cannon.com	2023-07-28
487	dana34@hotmail.com	2023-09-08
488	karla09@hotmail.com	2023-06-12
489	garciadillon@duncan.com	2021-06-22
490	fitzpatrickdevin@haynes.com	2021-10-02
491	hsimmons@gmail.com	2020-04-11
492	wstein@hotmail.com	2022-09-18
493	theresa17@yahoo.com	2022-08-26
494	charlesyork@gmail.com	2020-12-31
495	amandalindsey@gmail.com	2021-11-08
496	kathleencamacho@robbins.com	2023-06-01
497	deborahreyes@hotmail.com	2022-10-29
498	ericksonmichael@gmail.com	2023-04-18
499	james99@yahoo.com	2021-12-23
500	ojohnson@berg.info	2021-02-20
501	cdelgado@turner.com	2022-09-09
502	philip18@yahoo.com	2022-04-18
503	lindseysummers@espinoza.biz	2021-04-13
504	lopezmatthew@martin.com	2022-05-16
505	hhubbard@hotmail.com	2022-06-16
506	rebeccaferguson@gmail.com	2020-12-23
507	cochrannicholas@holland-moreno.net	2023-06-21
508	myersnancy@yahoo.com	2022-10-09
509	hernandezdavid@hodge.com	2022-07-03
510	ucervantes@hotmail.com	2022-04-05
511	josephchambers@cook.net	2022-11-07
512	james58@hotmail.com	2021-06-01
513	ipotter@hotmail.com	2021-11-25
514	ttran@walls.com	2023-08-17
515	shannon75@gmail.com	2023-11-19
516	hudsonangela@martinez-manning.com	2023-04-19
517	heidijacobson@gmail.com	2021-09-17
518	ushelton@wallace.net	2021-07-21
519	michael78@hotmail.com	2022-08-02
520	michael91@hotmail.com	2020-12-21
521	dfloyd@holland-holmes.net	2022-06-06
522	tanya40@drake.com	2021-08-21
523	younglance@gmail.com	2023-10-16
524	meyersisaac@gmail.com	2022-12-09
525	morganjose@yahoo.com	2022-09-04
526	kscott@hotmail.com	2020-04-01
527	kaylakemp@gmail.com	2023-01-07
528	mary59@richardson-jones.com	2020-04-22
529	iford@gmail.com	2022-01-21
530	qgarcia@rose.info	2022-01-15
531	tracyanderson@chapman.biz	2022-01-30
532	shane95@white.com	2022-02-19
533	kennethroman@nguyen.com	2021-05-31
534	alexandergibbs@floyd.info	2022-08-01
535	lisa38@yahoo.com	2021-05-09
536	russelljessica@bell-hatfield.info	2022-12-06
537	kiarasawyer@hotmail.com	2020-10-26
538	susan17@lewis.net	2021-02-07
539	jaime82@fischer.com	2023-12-07
540	byrddanny@gmail.com	2021-03-10
541	millerjessica@torres.com	2022-08-31
542	mark75@francis.com	2023-11-11
543	christian17@yahoo.com	2020-08-04
544	brian73@hotmail.com	2020-06-30
545	bmay@wyatt.info	2023-09-09
546	cherylgutierrez@gmail.com	2022-06-14
547	heathersnyder@hotmail.com	2022-11-25
548	uhill@yahoo.com	2023-01-25
549	francisco71@shaffer.org	2021-02-12
550	grossjames@gmail.com	2023-08-01
551	jessicaramirez@boyd.com	2021-03-06
552	nataliepotter@hotmail.com	2024-02-25
553	tstafford@marshall.com	2022-03-26
554	andrewschultz@smith.biz	2022-05-11
555	moyerjessica@hotmail.com	2022-09-04
556	annetterandolph@hotmail.com	2022-07-07
557	charlesross@yahoo.com	2023-11-10
558	juliejones@hotmail.com	2021-10-02
559	ythomas@thompson.com	2020-04-15
560	laura74@long.com	2021-01-21
561	danielskinner@gmail.com	2020-12-24
562	brooksmegan@gmail.com	2020-04-25
563	emarquez@howell.org	2020-11-06
564	dwheeler@yahoo.com	2022-08-06
565	fosternicholas@vega-brown.com	2021-07-28
566	jordanwheeler@hotmail.com	2023-09-02
567	kimberly37@yahoo.com	2023-11-06
568	stephenrivera@gmail.com	2021-12-06
569	peterguerrero@gonzalez.net	2021-08-02
570	mooresteven@hotmail.com	2023-04-18
571	iwallace@hotmail.com	2022-05-22
572	crystaljohnson@hood.net	2020-10-24
573	jeffreymathis@alexander.com	2022-02-28
574	goodcarrie@acosta.com	2024-01-30
575	joshuacurtis@rogers.com	2022-12-20
576	sgordon@king-meyer.com	2023-01-28
577	elizabethrobinson@gardner-weber.info	2021-11-23
578	davidmanning@gmail.com	2023-06-08
579	nelsonwilliam@lloyd.org	2023-06-27
580	browncynthia@beard.net	2024-02-27
581	delgadostephen@holmes-lee.com	2021-12-18
582	mwalker@hotmail.com	2023-04-17
583	kathleen57@johnson.com	2020-12-30
584	frazierkimberly@jones.com	2024-02-13
585	maria36@boyd.com	2023-02-16
586	rodney80@yahoo.com	2022-12-30
587	makaylawilliams@martin.com	2021-04-29
588	shannonduncan@wolf.biz	2020-04-03
589	elizabeth52@davis.net	2023-12-26
590	troy72@gmail.com	2023-07-26
591	fordcurtis@hotmail.com	2024-03-25
592	fsmith@hotmail.com	2023-09-26
593	frystanley@garcia-kirby.biz	2024-03-29
594	linda87@norris.com	2022-06-22
595	danielsdavid@gmail.com	2020-04-11
596	heatherwade@gray.biz	2021-08-21
597	ipeters@gmail.com	2021-02-18
598	hannah11@gmail.com	2020-04-02
599	tiffany84@yahoo.com	2023-07-05
600	peter09@gmail.com	2021-08-28
601	cyates@gmail.com	2021-12-24
602	laura98@yahoo.com	2022-09-06
603	mstone@ward-chavez.info	2021-08-08
604	dianaaguirre@gmail.com	2020-07-05
605	nturner@hansen-schneider.com	2022-09-10
606	tiffanysmith@yahoo.com	2020-04-06
607	rvillanueva@yahoo.com	2021-11-16
608	ibarnett@hotmail.com	2023-08-27
609	michael51@taylor.com	2021-10-03
610	candice97@robinson-herrera.com	2022-01-02
611	stephanietravis@reyes.com	2022-09-10
612	perezheidi@davis.net	2020-10-12
613	tlindsey@yahoo.com	2022-02-24
614	qgonzalez@williams-jimenez.net	2022-06-30
615	evansjessica@hill.com	2023-12-27
616	taylorlaura@gmail.com	2022-01-14
617	jamiemartinez@gmail.com	2022-02-26
618	qramos@yahoo.com	2020-05-19
619	qbrown@stewart.com	2022-06-19
620	michelle57@hampton.com	2022-09-27
621	wcross@davis.com	2021-07-22
622	xolson@hotmail.com	2023-11-25
623	newtoncolleen@yahoo.com	2024-02-14
624	cwatson@yahoo.com	2022-12-24
625	iwheeler@hotmail.com	2022-01-19
626	amandabradley@hill.com	2023-08-14
627	alvarezlouis@hotmail.com	2020-08-21
628	vincentdeborah@gmail.com	2022-01-19
629	katherine90@gmail.com	2021-02-03
630	alexajones@moore.com	2023-03-13
631	brownjill@diaz.com	2020-06-10
632	richardwells@zimmerman-burns.com	2021-10-09
633	jameswebster@reynolds-morris.biz	2022-04-26
634	carlsonamy@simon.com	2021-07-23
635	fbrown@gmail.com	2020-05-14
636	lopezjanet@yahoo.com	2021-01-18
637	cnielsen@gmail.com	2022-03-13
638	scarter@gmail.com	2020-10-29
639	esmith@waller-jenkins.com	2024-03-16
640	agray@glover-allen.com	2022-03-08
641	katherinemiller@jones.org	2023-12-20
642	crodriguez@yahoo.com	2021-01-04
643	vegakathryn@gmail.com	2020-08-10
644	cynthiajackson@todd.com	2023-03-03
645	skemp@gmail.com	2022-10-17
646	leslie00@gray.org	2024-01-06
647	zamorajohn@marsh-hamilton.com	2022-12-04
648	luis94@yahoo.com	2023-09-12
649	hessjennifer@clark.info	2021-05-02
650	sherridennis@campbell.net	2021-06-13
651	eblack@fuentes-reynolds.com	2022-12-26
652	greenejennifer@yahoo.com	2022-04-22
653	sara38@yahoo.com	2021-08-13
654	mark92@mcmillan.com	2022-11-14
655	scross@walter.com	2021-05-31
656	arnoldmonica@yahoo.com	2020-04-28
657	danielle07@gmail.com	2023-07-04
658	marthaschaefer@hotmail.com	2022-05-04
659	davidoneal@hotmail.com	2020-06-29
660	johnsonadam@pham-holder.com	2023-01-28
661	saundersjennifer@peterson.biz	2020-10-10
662	carrie82@young.biz	2020-04-29
663	diana84@gmail.com	2022-08-31
664	trobinson@yahoo.com	2022-10-10
665	derek34@hotmail.com	2020-08-28
666	mmoore@fowler-mcdonald.com	2023-10-18
667	ugalvan@hotmail.com	2023-08-16
668	banksethan@petty.biz	2023-06-18
669	vjacobs@yahoo.com	2020-10-26
670	brownricky@hotmail.com	2023-10-11
671	sgonzales@lewis.net	2023-09-24
672	karen23@gmail.com	2021-05-20
673	katherine84@yahoo.com	2020-09-27
674	julienorris@king.biz	2022-04-09
675	dawnchoi@barrett-smith.com	2021-08-11
676	harrissteven@pierce.com	2023-05-09
677	faithvaughn@hotmail.com	2022-11-24
678	brentmartinez@guerra-obrien.com	2020-09-10
679	edwardsrobert@hotmail.com	2020-11-18
680	hintonkatherine@gmail.com	2022-10-17
681	terrypatel@obrien.com	2024-03-04
682	williamyoung@long-leblanc.biz	2021-11-25
683	pbell@mccoy.com	2023-08-01
684	rachelhogan@gmail.com	2023-12-19
685	marvin76@gmail.com	2020-11-02
686	laura34@gmail.com	2021-04-07
687	bradleybrowning@white.com	2024-03-30
688	andrew65@gmail.com	2023-12-06
689	moniqueruiz@thompson-galvan.com	2021-05-16
690	mannbrandon@alvarado.info	2023-09-02
691	christopher55@holmes.com	2023-03-27
692	sshaw@gmail.com	2021-12-13
693	bradleyholly@yahoo.com	2021-09-27
694	derrick90@yahoo.com	2021-04-06
695	daniellegay@mosley-flowers.com	2024-01-26
696	cgonzales@myers-park.com	2023-04-19
697	heathergraham@smith.com	2023-09-24
698	jonesanthony@rivera.com	2024-03-27
699	ythompson@gmail.com	2021-03-11
700	tarareid@barrett-holden.com	2023-06-15
701	clementsmichelle@yahoo.com	2024-03-20
702	wrightkaitlin@yahoo.com	2024-02-11
703	alvaradodaniel@gmail.com	2023-12-25
704	clarencegriffin@hotmail.com	2022-01-17
705	pughashley@yahoo.com	2023-08-28
706	wandawoodard@hotmail.com	2022-01-28
707	erica12@gmail.com	2020-04-06
708	daniel06@villanueva.com	2021-06-14
709	mtorres@yahoo.com	2024-03-12
710	nelsonbrett@anderson.com	2023-08-29
711	dorothy49@yahoo.com	2020-07-22
712	deananderson@hotmail.com	2021-10-29
713	courtneyjones@collins-mendoza.com	2023-12-17
714	brandi24@hotmail.com	2023-11-04
715	hernandezbarbara@yahoo.com	2021-04-18
716	cynthia42@ray.com	2020-05-30
717	danielsaunders@yahoo.com	2021-09-30
718	danielpotter@cantrell.com	2024-02-14
719	kimkelly@gmail.com	2020-06-08
720	jessica88@hotmail.com	2021-01-08
721	jmurphy@sanders-garza.com	2023-10-22
722	juanashley@gmail.com	2021-09-25
723	rebecca15@jackson-taylor.biz	2021-02-03
724	nwilliams@gmail.com	2022-01-26
725	wbaldwin@wyatt.net	2022-09-26
726	xwhitney@hotmail.com	2022-10-12
727	dweiss@hotmail.com	2021-01-26
728	jessicathompson@yahoo.com	2021-09-19
729	brenda40@hart.com	2022-04-17
730	michaelgonzalez@gmail.com	2024-03-12
731	janderson@hotmail.com	2022-06-15
732	wwyatt@hotmail.com	2020-07-28
733	matthewlyons@kelly.com	2020-07-08
734	lyoung@gmail.com	2022-04-12
735	janderson@mitchell.com	2021-01-21
736	whitenicholas@cook.com	2023-05-31
737	qbruce@gmail.com	2021-05-18
738	abrown@lewis-garcia.com	2022-11-25
739	scott27@gonzales.net	2022-12-16
740	shawnmaynard@hotmail.com	2021-09-12
741	gmartinez@mccormick.org	2023-04-13
742	watsonarthur@hotmail.com	2021-07-04
743	wilsonjasmine@hotmail.com	2022-06-29
744	jeremybeltran@gmail.com	2020-12-19
745	brandi89@moore.com	2023-04-18
746	paige68@harmon.org	2021-10-17
747	marcusmiller@yahoo.com	2022-07-12
748	robinsonwilliam@yahoo.com	2021-02-23
749	pettymary@gmail.com	2023-12-04
750	jason68@carter.info	2020-08-13
751	patrickpayne@davis.info	2021-06-03
752	stacey75@olson.net	2023-04-21
753	gmiller@banks-walker.com	2022-06-03
754	whitneyshawn@yahoo.com	2022-05-13
755	grossjustin@white-fisher.com	2023-07-24
756	mcgrathrichard@jones.com	2023-09-10
757	kevinvalentine@gmail.com	2021-12-27
758	savannahgoodman@newman.com	2023-04-03
759	whiteheadjustin@hotmail.com	2022-04-13
760	ehess@chen.com	2021-12-25
761	jessicapowell@thompson.com	2020-12-28
762	icarter@yahoo.com	2023-06-19
763	mortonpaul@yahoo.com	2021-07-23
764	amandajohnson@garcia-hayes.info	2022-01-26
765	kcosta@roach.com	2020-10-12
766	jeremyfisher@brooks-reilly.com	2021-01-26
767	xmcdonald@turner.com	2022-04-23
768	allisonhuber@yahoo.com	2023-08-02
769	beth24@morris.com	2022-10-01
770	ncook@scott.info	2020-08-11
771	fhawkins@yahoo.com	2024-02-23
772	ucastro@gmail.com	2022-07-18
773	jennifer95@blevins.org	2023-01-29
774	susan82@yahoo.com	2022-11-29
775	derrick68@gmail.com	2023-04-07
776	judyjordan@yahoo.com	2024-02-24
777	ufrench@le-chandler.com	2022-09-25
778	deborah88@hotmail.com	2023-05-27
779	nmiller@hotmail.com	2023-10-13
780	parkersarah@hotmail.com	2023-01-15
781	robinsonbeth@warren-miller.com	2023-06-22
782	kelly05@montgomery.org	2023-03-13
783	johnsonryan@gmail.com	2020-07-12
784	timothymartinez@ballard.com	2020-07-10
785	osborneashlee@hotmail.com	2022-01-18
786	smithjacob@gmail.com	2023-07-07
787	ggreer@dalton.com	2023-04-21
788	brandy30@hughes-clark.org	2020-08-07
789	kathyblair@soto.com	2022-02-07
790	mmckee@jones.info	2024-02-20
791	xcarroll@craig.org	2021-05-10
792	kelseyholt@morales-newman.com	2023-02-26
793	vanessawatts@phillips.com	2023-05-17
794	angelagalvan@hotmail.com	2020-05-26
795	kimberlyjones@yahoo.com	2024-02-04
796	banksdaniel@bryant.net	2021-01-02
797	sclay@lopez.com	2020-08-05
798	alexander96@walker-duke.com	2020-06-03
799	leecarolyn@jones.net	2020-05-15
800	nicholasfisher@yahoo.com	2021-02-15
\.


--
-- TOC entry 3439 (class 0 OID 16669)
-- Dependencies: 220
-- Data for Name: member; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.member (personid, memberstartdate, membershiptype, isactive) FROM stdin;
1	2023-01-03	Daily	t
3	2022-11-08	Quarterly	t
4	2025-03-28	Quarterly	t
6	2025-02-06	Daily	f
8	2024-08-14	Daily	t
9	2022-06-30	Quarterly	f
10	2023-09-06	Quarterly	f
11	2023-09-05	Quarterly	f
12	2023-01-30	Annual	t
13	2024-01-09	Annual	t
14	2023-12-05	Quarterly	t
15	2025-01-27	Daily	t
16	2023-12-30	Personal Training	f
17	2024-04-20	Daily	t
20	2023-09-01	Daily	t
21	2022-10-19	Monthly	t
22	2023-11-01	Personal Training	f
23	2022-05-19	Quarterly	t
25	2024-07-24	Annual	t
26	2022-07-07	Annual	t
27	2022-11-05	Monthly	f
29	2024-05-25	Quarterly	f
30	2024-03-31	Monthly	t
31	2023-01-10	Personal Training	t
32	2022-06-01	Daily	t
33	2024-07-16	Personal Training	f
34	2025-02-10	Personal Training	t
35	2024-05-25	Annual	t
37	2024-05-10	Personal Training	f
38	2024-06-30	Annual	t
41	2025-01-13	Daily	t
43	2024-05-15	Daily	t
44	2024-02-17	Monthly	f
45	2024-01-29	Monthly	f
46	2022-09-26	Monthly	t
47	2022-11-20	Monthly	t
48	2024-12-28	Personal Training	f
49	2023-04-21	Personal Training	t
50	2023-07-23	Quarterly	t
52	2024-05-19	Monthly	f
54	2023-05-15	Annual	f
55	2022-09-01	Personal Training	t
56	2024-02-04	Daily	t
58	2023-09-08	Personal Training	f
61	2022-07-12	Daily	t
63	2023-07-15	Daily	f
65	2024-01-24	Annual	t
67	2025-03-24	Annual	t
70	2023-03-15	Personal Training	f
71	2024-11-28	Annual	t
72	2024-09-01	Quarterly	f
73	2022-05-15	Daily	f
75	2023-06-30	Quarterly	t
77	2022-09-22	Daily	t
78	2024-11-11	Monthly	f
79	2022-07-15	Personal Training	f
81	2022-11-06	Personal Training	t
82	2023-09-06	Personal Training	f
83	2023-06-21	Annual	t
84	2022-08-05	Personal Training	t
86	2023-08-04	Monthly	t
87	2024-05-05	Monthly	t
88	2022-11-23	Annual	t
92	2022-12-19	Daily	f
93	2023-02-20	Monthly	t
94	2025-02-06	Daily	t
96	2023-06-06	Personal Training	f
97	2022-09-23	Quarterly	t
98	2024-01-07	Quarterly	t
99	2024-06-08	Monthly	f
100	2024-01-17	Annual	f
101	2023-02-01	Monthly	f
103	2024-11-24	Monthly	f
104	2023-06-30	Personal Training	t
105	2022-07-25	Daily	t
107	2023-07-24	Personal Training	f
109	2023-11-08	Personal Training	t
110	2023-12-08	Monthly	t
111	2024-07-26	Annual	t
112	2022-05-15	Quarterly	f
113	2023-07-10	Daily	f
114	2023-11-25	Personal Training	t
115	2024-08-28	Monthly	t
116	2023-08-12	Annual	f
118	2023-03-16	Daily	f
119	2023-06-23	Daily	f
120	2024-05-19	Personal Training	f
121	2022-11-24	Quarterly	f
122	2024-12-26	Daily	f
123	2023-03-21	Quarterly	t
125	2022-05-16	Quarterly	f
126	2022-10-15	Daily	f
128	2023-11-01	Daily	f
129	2023-12-21	Annual	t
130	2022-08-27	Quarterly	t
131	2024-12-16	Personal Training	t
132	2022-06-03	Annual	t
134	2023-09-06	Quarterly	f
135	2023-04-18	Quarterly	t
136	2024-05-18	Personal Training	f
137	2023-07-31	Personal Training	t
139	2024-06-08	Daily	t
140	2023-10-15	Daily	f
141	2022-08-16	Quarterly	f
142	2023-02-01	Daily	f
144	2023-07-30	Annual	t
145	2025-02-16	Annual	f
147	2024-12-12	Daily	f
149	2023-08-25	Personal Training	t
150	2023-04-10	Quarterly	f
151	2022-09-17	Monthly	t
152	2024-07-12	Personal Training	f
154	2023-11-17	Annual	t
156	2023-03-08	Personal Training	f
157	2023-02-26	Personal Training	f
158	2023-12-25	Annual	f
160	2024-07-03	Quarterly	f
5	2022-10-30	Expired	f
18	2023-07-21	Expired	f
24	2023-04-15	Expired	f
40	2022-07-22	Expired	f
42	2023-08-12	Expired	f
62	2022-10-18	Expired	f
68	2023-11-15	Expired	f
69	2025-01-18	Expired	f
76	2022-04-21	Expired	f
28	2022-10-24	Annual	f
51	2023-11-08	Personal Training	f
59	2023-08-16	Personal Training	f
60	2022-05-21	Quarterly	f
64	2022-08-08	Quarterly	f
66	2024-08-13	Annual	f
91	2023-07-14	Annual	f
127	2024-06-18	Daily	f
138	2023-03-04	Daily	f
155	2024-04-09	Quarterly	f
163	2023-01-29	Quarterly	t
165	2025-02-18	Personal Training	f
167	2023-06-22	Annual	t
168	2023-05-13	Annual	t
170	2024-11-11	Quarterly	f
171	2023-12-04	Personal Training	f
172	2022-11-18	Quarterly	f
175	2023-09-20	Annual	t
176	2023-12-23	Personal Training	t
179	2023-11-06	Monthly	t
180	2022-06-21	Quarterly	f
182	2024-11-18	Annual	t
184	2024-12-09	Daily	t
185	2023-06-26	Quarterly	f
186	2023-02-10	Annual	t
188	2022-10-31	Daily	f
189	2022-11-06	Annual	f
192	2025-03-08	Monthly	t
193	2024-05-26	Annual	t
196	2024-05-30	Monthly	t
197	2022-09-26	Monthly	t
198	2025-03-18	Annual	t
199	2024-10-18	Personal Training	t
201	2025-03-19	Daily	f
202	2024-10-12	Personal Training	t
203	2024-08-25	Personal Training	f
205	2024-01-18	Personal Training	t
207	2024-11-01	Daily	f
208	2023-06-12	Annual	t
209	2022-07-09	Quarterly	t
210	2024-09-24	Quarterly	t
211	2022-04-24	Quarterly	t
212	2022-08-31	Quarterly	t
213	2023-08-20	Personal Training	t
214	2023-02-14	Personal Training	t
215	2024-10-18	Daily	t
217	2024-09-23	Annual	f
218	2023-06-07	Daily	f
219	2023-01-12	Monthly	t
220	2024-02-10	Daily	f
222	2023-08-26	Daily	t
223	2024-06-10	Annual	t
224	2024-08-12	Quarterly	f
226	2022-10-09	Quarterly	t
227	2024-07-07	Annual	f
228	2022-05-03	Monthly	t
229	2023-05-11	Annual	t
230	2024-03-22	Quarterly	f
231	2024-09-22	Daily	t
232	2023-02-09	Monthly	t
233	2022-08-01	Annual	t
235	2023-02-09	Personal Training	t
236	2022-08-29	Quarterly	t
239	2023-03-21	Annual	f
240	2022-08-26	Annual	f
242	2024-12-28	Daily	t
243	2024-06-01	Quarterly	t
244	2022-07-31	Quarterly	f
245	2023-08-23	Quarterly	f
246	2023-07-15	Daily	f
247	2024-12-30	Personal Training	t
248	2023-08-10	Daily	t
249	2022-07-26	Annual	t
250	2023-11-15	Personal Training	t
252	2023-06-22	Quarterly	t
253	2023-12-14	Daily	t
254	2024-08-10	Monthly	f
256	2024-08-16	Monthly	f
257	2023-08-16	Annual	t
260	2023-03-30	Personal Training	t
263	2024-08-29	Daily	t
264	2023-03-21	Personal Training	t
265	2023-07-27	Personal Training	t
268	2023-01-21	Monthly	f
269	2022-04-04	Annual	t
270	2022-10-09	Annual	t
272	2022-09-21	Daily	t
273	2022-05-19	Quarterly	f
274	2024-04-23	Daily	t
275	2023-06-28	Annual	t
276	2022-06-17	Personal Training	f
277	2024-04-22	Monthly	f
281	2022-05-02	Quarterly	f
282	2023-11-09	Personal Training	t
284	2024-11-29	Daily	t
285	2024-03-21	Annual	f
287	2023-04-24	Daily	t
291	2023-08-31	Daily	f
292	2024-03-18	Personal Training	t
294	2023-12-18	Daily	f
295	2025-01-09	Daily	f
296	2024-10-18	Monthly	t
297	2025-02-22	Daily	f
298	2022-08-09	Monthly	f
299	2024-12-10	Personal Training	t
301	2024-09-05	Quarterly	t
303	2023-12-14	Daily	f
305	2022-12-19	Personal Training	t
306	2024-10-11	Monthly	t
307	2022-11-13	Annual	t
308	2023-07-08	Monthly	f
309	2024-01-23	Personal Training	t
310	2025-02-05	Daily	t
311	2023-08-16	Monthly	t
312	2024-05-04	Personal Training	f
313	2024-12-07	Annual	t
314	2023-02-22	Annual	t
316	2025-03-03	Personal Training	t
317	2022-11-01	Personal Training	f
318	2023-01-17	Monthly	t
319	2024-10-17	Personal Training	t
320	2024-03-11	Annual	f
321	2023-12-23	Personal Training	t
323	2022-10-26	Annual	t
324	2024-02-29	Annual	f
166	2024-06-22	Expired	f
169	2024-10-12	Expired	f
173	2023-03-03	Expired	f
177	2024-04-07	Expired	f
178	2022-12-12	Expired	f
181	2022-07-10	Expired	f
183	2025-01-18	Expired	f
187	2025-02-18	Expired	f
191	2024-10-10	Expired	f
164	2022-11-12	Quarterly	f
286	2023-09-28	Quarterly	f
288	2022-09-13	Annual	f
325	2024-12-26	Daily	f
327	2024-10-26	Daily	t
329	2024-08-02	Quarterly	f
331	2024-09-13	Daily	f
333	2022-11-26	Personal Training	t
334	2022-10-14	Daily	f
335	2025-03-28	Annual	t
336	2025-01-10	Annual	t
337	2022-05-06	Monthly	t
338	2024-08-22	Quarterly	f
340	2023-12-14	Daily	f
343	2024-07-05	Quarterly	f
344	2022-08-05	Personal Training	f
345	2024-08-29	Daily	t
346	2023-01-25	Annual	f
347	2025-02-03	Monthly	f
348	2024-01-10	Quarterly	t
349	2025-03-16	Personal Training	t
350	2024-09-04	Quarterly	t
353	2024-03-20	Quarterly	t
355	2023-04-19	Monthly	t
357	2022-06-17	Personal Training	t
359	2025-03-18	Monthly	f
361	2022-11-22	Annual	f
363	2024-12-14	Monthly	f
364	2023-04-28	Annual	f
365	2023-08-15	Daily	f
366	2023-11-17	Personal Training	f
367	2024-06-11	Daily	t
368	2022-09-29	Annual	f
369	2024-01-29	Quarterly	t
370	2023-07-23	Quarterly	f
371	2024-02-01	Annual	t
372	2022-04-08	Daily	t
373	2022-10-31	Daily	f
375	2023-02-24	Daily	f
376	2023-10-21	Personal Training	t
377	2023-04-27	Annual	t
378	2023-06-18	Quarterly	f
379	2024-12-13	Daily	t
380	2022-06-20	Quarterly	t
381	2024-06-20	Daily	t
382	2024-08-18	Monthly	t
383	2025-01-29	Daily	t
384	2022-05-03	Daily	f
385	2023-11-20	Quarterly	t
386	2023-08-31	Quarterly	t
387	2022-09-08	Daily	t
389	2023-11-18	Annual	f
390	2024-03-12	Personal Training	f
392	2024-09-22	Quarterly	f
395	2022-10-03	Personal Training	t
396	2023-07-28	Daily	t
397	2022-10-25	Monthly	t
398	2023-03-05	Personal Training	t
399	2024-10-16	Personal Training	t
400	2022-11-24	Quarterly	t
190	2024-02-16	Quarterly	t
19	2022-10-26	Quarterly	f
251	2023-11-08	Quarterly	t
266	2024-02-02	Quarterly	t
2	2023-03-12	Quarterly	t
7	2023-04-21	Quarterly	t
80	2023-06-17	Quarterly	f
162	2023-07-25	Quarterly	f
108	2022-04-05	Quarterly	f
124	2024-02-15	Quarterly	f
279	2022-06-02	Quarterly	t
358	2024-03-02	Quarterly	f
74	2022-05-05	Quarterly	f
174	2022-07-21	Quarterly	f
36	2024-01-13	Quarterly	f
300	2023-05-23	Quarterly	f
53	2025-02-08	Quarterly	f
332	2025-01-25	Quarterly	f
85	2023-07-04	Expired	f
89	2023-08-05	Expired	f
95	2024-09-29	Expired	f
102	2025-01-22	Expired	f
106	2023-07-04	Expired	f
117	2024-01-02	Expired	f
133	2023-07-10	Expired	f
143	2024-07-19	Expired	f
148	2024-04-25	Expired	f
159	2023-07-12	Expired	f
194	2024-11-14	Expired	f
195	2025-01-29	Expired	f
200	2022-05-01	Expired	f
204	2024-09-25	Expired	f
206	2024-08-04	Expired	f
216	2025-01-23	Expired	f
225	2023-10-31	Expired	f
234	2024-03-22	Expired	f
237	2024-06-18	Expired	f
238	2023-10-07	Expired	f
241	2022-09-12	Expired	f
255	2023-01-05	Expired	f
259	2022-08-23	Expired	f
262	2022-11-23	Expired	f
267	2024-07-20	Expired	f
271	2023-07-27	Expired	f
280	2023-11-19	Expired	f
283	2022-12-26	Expired	f
289	2023-09-28	Expired	f
293	2022-12-05	Expired	f
302	2023-10-04	Expired	f
304	2023-07-26	Expired	f
315	2024-12-29	Expired	f
326	2022-04-22	Expired	f
328	2022-10-04	Expired	f
330	2023-09-01	Expired	f
341	2025-02-06	Expired	f
351	2023-09-29	Expired	f
352	2024-03-02	Expired	f
356	2022-06-27	Expired	f
388	2023-09-10	Expired	f
391	2024-04-04	Expired	f
394	2024-03-21	Expired	f
339	2024-11-21	Personal Training	f
342	2024-11-16	Daily	f
354	2022-04-23	Personal Training	f
360	2023-04-01	Annual	f
362	2022-11-26	Quarterly	f
393	2023-03-18	Quarterly	f
261	2024-08-03	Quarterly	f
161	2024-09-29	Quarterly	f
258	2024-05-03	Quarterly	f
322	2023-12-26	Quarterly	f
153	2023-09-09	Quarterly	f
290	2025-01-06	Quarterly	f
\.


--
-- TOC entry 3436 (class 0 OID 16634)
-- Dependencies: 217
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.person (personid, firstname, lastname, dateofbirth) FROM stdin;
1	John	Lennon	1940-10-09
2	Paul	McCartney	1942-06-18
3	George	Harrison	1943-02-25
4	Ringo	Starr	1940-07-07
5	Tal	Sasson	1987-08-09
6	Dana	Mor	1970-01-29
7	Shira	Katz	1975-01-26
8	Yossi	Amsalem	1990-06-24
9	Noa	Levi	1988-12-22
10	Shira	Atias	2005-01-15
11	Yossi	Avraham	2006-01-28
12	Nir	Dahan	1963-09-06
13	Ronen	Dahan	1970-06-17
14	David	Levi	1993-11-01
15	Tamar	Baruch	1987-07-01
16	Nir	Mor	2005-02-16
17	Yossi	Biton	1968-06-28
18	Tamar	Amsalem	1954-06-03
19	Dana	Mor	1995-12-14
20	Shira	Katz	1956-11-14
21	Moshe	Baruch	1959-09-13
22	Yael	Cohen	1958-10-30
23	Ofir	Mor	1997-04-23
24	David	Peretz	1957-08-09
25	Omer	Katz	1996-06-06
26	Moshe	Sasson	2004-03-24
27	Ofir	Vaknin	1973-12-06
28	Hila	Shalom	1978-10-04
29	Hila	Cohen	1974-06-29
30	Yarden	Cohen	1992-06-15
31	Avi	Baruch	1979-01-28
32	David	Vaknin	2005-11-07
33	Gili	Peretz	1985-10-21
34	Rivka	Halabi	1974-10-29
35	Rivka	Azoulay	1963-10-18
36	Moshe	Sasson	1987-10-10
37	Hila	Nahum	1968-01-15
38	Nir	Mor	1964-09-17
39	Nir	Mizrahi	2007-03-08
40	Ronen	Sasson	1999-10-19
41	Eli	BenDavid	1998-08-18
42	Eli	Avraham	1992-12-25
43	David	Sasson	1964-05-28
44	Nir	Biton	1964-12-30
45	Yossi	Shalom	1985-07-11
46	Dana	Mizrahi	1972-11-08
47	Eli	Nahum	1974-10-03
48	Moshe	BenDavid	1972-11-20
49	Tamar	Levi	2006-07-08
50	Lior	Azoulay	1987-09-30
51	Noa	Katz	1958-11-13
52	Gili	Amsalem	1956-08-02
53	Tamar	Levi	1998-04-06
54	Tamar	Avraham	1989-10-09
55	Noa	Shalom	1955-09-06
56	Noa	Atias	1996-02-10
57	Noa	Biton	2002-04-22
58	Tal	Mor	1993-06-24
59	Eli	Cohen	1967-03-27
60	Gili	Shalom	1980-04-24
61	David	Cohen	2006-05-03
62	David	Avraham	1974-03-24
63	Yael	Sharabi	1967-09-25
64	Noa	Sasson	1955-09-28
65	Nir	Sharabi	1989-09-03
66	Yossi	Katz	2003-02-20
67	Eli	BenDavid	1970-06-07
68	Avi	Mor	1974-05-24
69	Tal	Amsalem	1991-07-16
70	Tal	Amsalem	1971-10-08
71	Ronen	Biton	1978-01-15
72	David	Vaknin	1956-05-28
73	Yossi	Nahum	2002-02-04
75	Dana	Vaknin	1982-01-31
76	Noa	Dahan	1987-06-19
77	Yossi	Atias	1998-04-02
78	Eli	Atias	1955-08-03
79	Tamar	Katz	1955-05-24
80	Yarden	BenDavid	1971-10-16
81	Yael	Baruch	1982-05-09
82	Shira	Azoulay	1976-07-01
83	Nir	Biton	1966-01-04
84	Eli	Mizrahi	1957-10-31
85	Yarden	Azoulay	1985-04-13
86	Moshe	Mizrahi	1997-05-17
87	Nir	Nahum	1980-01-06
88	Eli	Mizrahi	1987-03-12
89	Hila	Dahan	1980-02-08
90	Yarden	Amsalem	2001-03-16
91	Omer	Avraham	1982-06-15
92	Avi	Cohen	1986-01-14
93	Avi	Halabi	2006-12-19
94	Nir	Sasson	1996-05-15
95	Hila	Avraham	1955-09-24
96	Eli	Nahum	1998-02-08
97	Yossi	Shalom	1959-05-05
98	Yael	Dahan	1972-08-17
99	Noa	Amsalem	1981-01-31
100	Ronen	Amsalem	1962-09-19
101	Shira	Shalom	1983-06-13
102	Yael	Levi	1986-03-30
103	Yarden	Mor	2004-03-06
104	Eli	Mor	1987-04-02
105	Nir	Azoulay	1963-01-25
106	Tamar	Sasson	1992-04-25
107	Noa	Sharabi	1995-08-02
108	Yael	Vaknin	2004-06-27
109	Yarden	Amsalem	1985-03-06
110	David	Avraham	2000-05-29
111	Shira	Atias	1976-12-05
112	Ofir	Atias	1955-11-23
113	Dana	Vaknin	1964-09-16
114	Dana	Azoulay	1993-01-17
115	Yael	Dahan	1956-08-09
116	Eli	Baruch	1977-09-21
117	Tal	Sharabi	1967-02-08
118	Yossi	Peretz	1955-04-22
119	Hila	Peretz	1968-08-20
120	Hila	Atias	1961-01-13
121	Yarden	Azoulay	1960-06-08
122	Hila	Shalom	1957-05-21
123	Yarden	Biton	1985-03-15
124	Hila	Biton	1998-06-09
125	Rivka	Azoulay	1989-08-22
126	Ronen	Vaknin	1983-12-21
127	Moshe	Avraham	1961-04-30
128	Nir	BenDavid	1976-03-06
129	Yarden	BenDavid	1965-06-22
130	Yossi	Sharabi	1975-11-29
131	Hila	Biton	1983-10-06
132	Tamar	Katz	1975-09-17
133	Hila	Levi	1990-10-06
134	Rivka	Azoulay	1980-12-25
135	Yossi	Biton	1969-10-18
136	Tamar	Dahan	1970-11-15
137	Yarden	Biton	1983-01-15
138	Dana	Sharabi	1974-08-31
139	David	Dahan	1965-08-20
140	Hila	Sharabi	1981-02-01
141	Hila	Cohen	1990-01-08
142	Yarden	Atias	1987-06-16
143	Yossi	Azoulay	1954-10-30
144	Dana	Shalom	1964-05-02
145	Dana	Vaknin	1982-11-23
146	Gili	Katz	2002-12-25
147	Ronen	Mizrahi	1985-07-11
148	Tal	Azoulay	1998-09-22
149	Shira	Cohen	1999-08-28
150	Yarden	Levi	1970-06-28
151	Yael	Mizrahi	1986-03-13
152	Gili	Katz	2005-04-11
153	Shira	Shalom	2000-11-17
154	Hila	Halabi	1961-03-19
155	Ronen	Shalom	1987-03-27
156	David	Baruch	1998-09-29
157	Eli	Peretz	1981-03-07
158	Hila	Azoulay	1991-08-05
159	David	Azoulay	1985-05-09
160	Hila	Vaknin	1962-02-14
161	Noa	Sasson	2006-07-28
162	Eli	BenDavid	1983-04-25
163	Shira	Dahan	1998-01-02
164	Eli	Peretz	2001-08-06
165	Yossi	Mizrahi	1995-10-14
166	Ofir	Nahum	1967-07-20
167	Noa	Atias	1978-07-28
168	Shira	Sasson	1980-10-10
169	Ofir	Halabi	1971-11-30
170	Avi	Mizrahi	2003-11-16
171	Tal	Atias	1995-09-11
172	Dana	BenDavid	1999-06-07
173	Rivka	Sasson	1993-03-31
174	David	Katz	1985-10-14
175	Noa	Shalom	1999-04-03
176	Omer	Halabi	1984-02-05
177	Lior	Atias	1992-01-15
178	Ronen	Halabi	1991-02-22
179	Rivka	Biton	2002-06-01
180	Ofir	Mor	1975-11-04
181	Yarden	Levi	1999-08-16
182	Ofir	Peretz	2000-09-07
183	Noa	Avraham	1991-02-19
184	Yael	Shalom	1980-08-14
185	Hila	Baruch	1980-12-26
186	Avi	Mor	1996-11-25
187	Tamar	Shalom	1983-02-25
188	Omer	Peretz	1988-11-12
189	Lior	Sharabi	1981-11-05
190	Nir	Amsalem	1994-09-01
191	Hila	Vaknin	1993-10-04
192	Omer	Cohen	1967-01-29
193	Omer	Azoulay	2006-09-24
194	Gili	Peretz	1977-01-16
195	Ronen	Halabi	1998-06-12
196	Ronen	Vaknin	1976-01-13
197	Ofir	Mizrahi	1973-09-11
198	Tamar	Azoulay	1991-06-03
199	Ronen	Amsalem	1989-06-28
200	Omer	Atias	1968-04-25
201	Rivka	Cohen	1974-02-11
202	Yossi	Katz	2000-05-02
203	Ofir	Amsalem	2005-12-12
204	Tal	Shalom	1971-01-06
205	Shira	Azoulay	1996-12-25
206	Yarden	Mizrahi	1995-04-24
207	David	Mizrahi	2003-09-28
208	Tamar	Shalom	1994-07-06
209	Noa	Shalom	1957-09-28
210	Yarden	Baruch	1991-11-14
211	Eli	Vaknin	1957-02-18
212	Eli	Peretz	1957-12-22
213	Omer	Azoulay	1962-04-12
214	Yarden	Azoulay	1966-04-09
215	Moshe	Avraham	1982-06-17
216	Yael	Sasson	1986-01-19
217	Dana	Mor	1980-02-08
218	Ronen	Amsalem	2002-01-09
219	Dana	Shalom	1973-08-25
220	Rivka	Sasson	2000-12-05
221	Lior	Sasson	2005-06-09
222	Ronen	Nahum	1990-08-01
223	Hila	Nahum	1983-01-01
224	Omer	Katz	1962-06-20
225	Gili	Avraham	1994-10-26
226	Gili	Baruch	2004-08-06
227	Ronen	Peretz	1954-09-12
228	Eli	Mizrahi	1968-07-07
229	Moshe	Amsalem	1964-04-08
230	Yossi	Cohen	2006-03-01
231	Omer	Atias	1992-01-08
232	Tal	Biton	1999-10-24
233	Ronen	Mor	1998-03-10
234	Avi	Dahan	1974-03-23
235	Omer	Vaknin	1955-06-08
236	Eli	Halabi	1972-02-02
237	Yossi	Avraham	1982-07-02
238	Shira	Peretz	1993-01-22
239	Lior	Atias	1984-07-08
240	Ofir	Shalom	1990-12-26
241	Avi	Atias	1959-11-12
242	Gili	Biton	1957-07-18
243	Avi	Atias	2001-07-07
244	Lior	Shalom	2000-12-31
245	Yael	Dahan	1983-01-21
246	Tal	Levi	1987-05-11
247	Yael	Atias	2001-06-12
248	Omer	Levi	1998-08-28
249	Ofir	Mizrahi	1976-04-17
250	Tal	Baruch	1983-10-12
251	Tal	Azoulay	1993-02-25
252	Yarden	Sasson	1999-01-24
253	Moshe	Vaknin	1964-02-01
254	Ofir	Sasson	1985-04-08
255	Rivka	Vaknin	1976-05-24
256	Hila	Baruch	1978-12-04
257	Noa	Azoulay	1992-08-24
258	Eli	Vaknin	1956-12-16
259	Shira	Vaknin	1971-11-29
260	Nir	Sasson	1996-09-27
261	Omer	Halabi	1960-11-28
262	Noa	Peretz	1956-07-03
263	Yossi	Sasson	1956-10-21
264	Eli	Peretz	2003-03-08
265	Tal	Mizrahi	2003-08-27
266	Nir	Biton	1958-06-25
267	Nir	Levi	1992-03-10
268	Eli	Levi	1988-09-02
269	Shira	Atias	1972-01-23
270	Tamar	Levi	1978-06-23
271	Yarden	Cohen	1958-07-05
272	Ofir	Shalom	1984-09-23
273	Moshe	Mizrahi	1970-12-27
274	Gili	Avraham	1994-11-01
275	Moshe	Amsalem	1965-09-02
276	Nir	Sasson	1984-03-03
277	Yossi	Biton	1971-03-31
278	Omer	Dahan	2003-01-12
279	Tal	Vaknin	1985-11-15
280	Yael	Levi	1991-12-24
281	David	Katz	1981-08-04
282	Yarden	Dahan	1974-12-28
283	Tamar	Mizrahi	1973-10-21
284	Yael	Avraham	1999-11-18
285	Gili	Katz	1984-03-23
286	Rivka	Mor	1992-03-04
287	Rivka	BenDavid	1987-02-28
288	Eli	Nahum	1986-07-04
289	Tal	Atias	1976-10-21
290	Lior	Biton	1992-08-05
291	Nir	Biton	1982-10-05
292	Avi	Atias	1993-04-12
293	Yarden	Vaknin	1957-02-08
294	Nir	Mor	1988-10-22
295	Yael	Katz	1968-05-05
296	Yarden	Katz	1988-04-16
297	Shira	Mor	1973-01-07
298	David	Shalom	1966-11-25
299	Lior	Shalom	1971-04-17
300	Moshe	Vaknin	2006-05-16
301	Lior	Cohen	1992-09-10
302	Yossi	Mizrahi	1955-02-14
303	Rivka	Halabi	1977-09-04
304	Ronen	Cohen	1983-08-13
305	Ofir	Amsalem	1986-05-26
306	Yossi	Mor	1993-11-18
307	Tal	Avraham	2000-12-06
308	Noa	Shalom	1990-09-02
309	Hila	Sasson	1974-06-18
310	Nir	Atias	1988-02-01
311	Nir	Vaknin	1968-03-25
312	Gili	Shalom	1978-12-05
313	Avi	Shalom	1974-11-22
314	Omer	Biton	1998-03-06
315	Tamar	Mizrahi	1959-01-01
316	Gili	Sasson	2002-07-30
317	Noa	Sasson	1982-05-13
318	Avi	Atias	1976-01-18
319	Tal	Avraham	1983-03-04
320	Tamar	Halabi	1994-03-09
321	Ofir	Amsalem	2001-12-05
322	David	Avraham	1957-11-11
323	Ronen	Atias	2005-03-12
324	Tal	Baruch	1970-07-20
325	Ofir	BenDavid	1990-09-21
326	Noa	Azoulay	1957-07-29
327	Shira	Sharabi	1977-02-13
328	Hila	Amsalem	1998-05-29
329	David	Sharabi	1998-10-22
330	Omer	Avraham	1988-05-19
331	Rivka	Biton	1989-05-05
332	Ofir	Avraham	1979-06-11
333	Avi	Katz	1958-04-08
334	Ronen	Azoulay	1998-05-26
335	Shira	Halabi	2001-05-29
336	Avi	Atias	2004-07-11
337	Gili	Baruch	1990-09-21
338	Tal	Sharabi	1988-05-05
339	Nir	Sasson	1963-03-19
340	Yarden	Levi	1979-09-26
341	Tamar	Vaknin	1955-12-10
342	Hila	Halabi	1996-06-06
343	Hila	BenDavid	1972-11-15
344	Shira	Atias	1967-01-08
345	Ofir	Baruch	1966-10-04
346	Lior	Sharabi	1984-01-11
347	Rivka	Atias	1999-11-17
348	Yarden	Sasson	2006-02-13
349	Ofir	Baruch	1961-10-31
350	Omer	BenDavid	1958-10-31
351	Yael	Halabi	1974-11-01
352	Ofir	Sharabi	1995-07-05
353	Omer	Cohen	1997-11-04
354	Moshe	Halabi	1960-09-07
355	Eli	Dahan	1971-04-20
356	Noa	Dahan	1982-10-10
357	Hila	Vaknin	1998-07-24
358	Rivka	Atias	1962-05-15
359	Ofir	Azoulay	1991-04-13
360	Tal	Avraham	1999-06-01
361	Ofir	Biton	1999-10-28
362	Yossi	Baruch	1993-09-27
363	Eli	Avraham	1977-12-21
364	Shira	Mor	1962-04-26
365	Rivka	Amsalem	1975-07-28
366	Shira	Amsalem	1968-01-05
367	Omer	Levi	1968-06-05
368	Tamar	Mor	1999-10-02
369	Moshe	Sasson	1967-10-29
370	Rivka	Levi	1974-02-16
371	Shira	Peretz	1972-07-07
372	Avi	Peretz	1990-06-10
373	Yarden	Vaknin	1975-03-23
374	Noa	Biton	2002-11-14
375	Rivka	Amsalem	1978-03-28
376	Ronen	Halabi	1994-06-14
377	Gili	Dahan	1979-09-16
378	Shira	Mizrahi	1962-12-23
379	Ofir	Baruch	1977-07-25
380	Avi	Azoulay	1989-04-27
381	Yael	Avraham	1979-09-03
382	Dana	Halabi	1999-04-30
383	Ronen	Mor	1992-04-22
384	Avi	Halabi	1977-10-08
385	Ofir	BenDavid	1970-03-17
386	Omer	Biton	1987-08-04
387	Avi	Nahum	1980-12-05
388	Gili	Azoulay	1966-12-29
389	Ofir	Baruch	1994-12-24
390	Omer	Avraham	1983-09-25
391	Shira	Halabi	1974-05-19
392	Lior	Cohen	1999-05-31
393	Avi	Katz	1995-07-23
394	Rivka	Dahan	1967-12-21
395	Rivka	Shalom	1965-07-22
396	Noa	Shalom	1994-08-08
397	Yael	Shalom	1962-07-23
398	Shira	Cohen	1987-09-13
399	Nir	Azoulay	1957-05-01
400	Yossi	Mizrahi	1972-01-17
401	Dana	Amsalem	1982-10-23
402	Tal	Sasson	1984-06-13
403	Moshe	Katz	1977-01-30
404	Tal	BenDavid	1963-02-15
405	David	Dahan	1964-10-17
406	Shira	Sharabi	1966-01-24
407	Rivka	Sharabi	1987-10-14
408	Ronen	Amsalem	1991-11-24
409	Hila	Vaknin	1962-02-01
410	Nir	Cohen	1985-07-03
411	Dana	Dahan	1995-04-06
412	Lior	Dahan	1954-10-31
413	Omer	BenDavid	1969-11-26
414	Avi	Amsalem	1996-04-01
415	Noa	Biton	1989-06-18
416	Lior	Biton	1998-01-27
417	Avi	Nahum	1965-02-04
418	Ofir	Katz	1960-09-30
419	Dana	Mor	1972-03-04
420	David	Levi	1991-12-08
421	Shira	Halabi	2004-01-27
422	Nir	Peretz	1992-05-06
423	Moshe	BenDavid	1989-11-18
424	Ofir	Avraham	1960-09-26
425	Yossi	Biton	1965-03-13
426	Ronen	Baruch	1957-04-08
427	Tal	Atias	1962-06-09
428	Tamar	Azoulay	1984-09-07
429	Avi	BenDavid	1987-07-11
430	Avi	Cohen	1994-02-05
431	Rivka	BenDavid	1987-08-09
432	Eli	Amsalem	1956-08-14
433	Noa	Sharabi	2005-04-14
434	Omer	BenDavid	2007-01-21
435	Rivka	Vaknin	1996-01-02
436	Tal	Levi	1994-09-20
437	Shira	Atias	1993-01-30
438	Yarden	Shalom	1955-12-24
439	Tamar	Mor	1963-01-03
440	Yossi	Dahan	1993-01-28
441	Ronen	Mizrahi	1992-10-03
442	Rivka	Biton	1971-05-23
443	Tamar	Avraham	1973-06-04
444	Gili	Atias	1991-12-16
445	Yael	Azoulay	1989-06-24
446	Yael	Sharabi	1987-05-06
447	Dana	Peretz	1958-09-19
448	Omer	Atias	1995-07-18
449	Lior	Peretz	1969-03-14
450	Omer	Amsalem	1985-07-11
451	Tal	Mor	1972-08-27
452	Moshe	Vaknin	1996-02-04
453	Hila	BenDavid	1972-01-17
454	Yossi	Peretz	1987-01-24
455	Nir	Sharabi	1990-09-09
456	Yael	Amsalem	1969-01-19
457	Yossi	Halabi	2004-02-06
458	Ofir	Halabi	1968-04-29
459	Yossi	Dahan	1994-04-28
460	David	Amsalem	1966-01-17
461	Tamar	Biton	1978-04-16
462	Nir	BenDavid	1958-08-23
463	Avi	Mor	2001-01-08
464	Nir	Atias	2005-11-22
465	Moshe	Vaknin	1985-07-09
466	Tamar	Katz	1955-04-16
467	Eli	Vaknin	1973-03-30
468	Rivka	Azoulay	1982-02-27
469	Yael	Halabi	1996-01-28
470	Gili	Dahan	1973-11-20
471	Noa	Azoulay	1988-04-23
472	Rivka	Nahum	1959-12-03
473	David	Mizrahi	1983-11-16
474	Yael	Mor	1958-01-21
475	Rivka	Mizrahi	1992-08-23
476	Eli	Atias	1984-05-28
477	Hila	Peretz	1965-07-12
478	Ofir	Azoulay	1990-09-14
479	Ofir	BenDavid	1954-05-02
480	Shira	Baruch	1958-05-25
481	Moshe	Levi	1996-03-29
482	Ronen	Azoulay	1970-11-05
483	David	Mor	2004-11-27
484	Avi	Atias	1958-02-07
485	Eli	Mor	1997-08-17
486	Omer	Sasson	1988-01-09
487	Yael	Mor	1966-12-29
488	David	Baruch	2000-05-06
489	Lior	Mor	1964-10-05
490	Yarden	Peretz	1974-03-11
491	Nir	Dahan	1974-11-22
492	Lior	Amsalem	1954-08-07
493	Noa	Dahan	1988-09-01
494	Tal	Mor	1994-05-15
495	Hila	Dahan	1962-09-11
496	Moshe	Avraham	1957-08-15
497	Yael	Vaknin	1978-06-17
498	Omer	Peretz	1977-05-14
499	Yarden	Cohen	1980-02-29
500	Lior	Cohen	1991-10-04
501	Avi	Sasson	1994-06-08
502	Rivka	Mor	1976-08-13
503	Eli	Avraham	1991-05-23
504	Rivka	Mizrahi	1962-04-03
505	Moshe	Cohen	1994-05-01
506	David	Amsalem	1963-04-01
507	Rivka	Dahan	1978-03-09
508	Omer	BenDavid	1957-10-10
509	Lior	Biton	1957-06-18
510	Yael	Levi	1975-06-10
511	Omer	Shalom	1968-01-13
512	Nir	BenDavid	1975-11-01
513	Lior	BenDavid	1996-01-29
514	Moshe	Dahan	1983-07-07
515	Eli	Dahan	1973-11-18
516	Gili	BenDavid	1991-10-13
517	Eli	Amsalem	1988-07-18
518	Eli	Azoulay	2003-05-26
519	Ronen	Biton	2007-01-30
520	Moshe	Azoulay	2003-10-11
521	Omer	Amsalem	1978-01-11
522	Dana	Levi	1972-04-30
523	Moshe	Baruch	1969-02-25
524	David	Sharabi	1964-10-02
525	Dana	Mor	1980-11-22
526	Yael	Atias	1992-06-21
527	Yarden	Levi	1956-09-23
528	Nir	Halabi	2002-03-10
529	Ronen	Dahan	1957-03-07
530	Yossi	Peretz	1980-10-20
531	Hila	Cohen	1979-09-17
532	Hila	Amsalem	1982-05-31
533	Ofir	Dahan	1980-07-14
534	Omer	Halabi	1971-01-14
535	Tamar	Amsalem	1961-11-25
536	Ofir	Peretz	2002-12-21
537	Gili	Sasson	2001-12-30
538	Yael	BenDavid	1964-10-02
539	Avi	Vaknin	1990-11-15
540	Omer	Cohen	1961-06-22
541	Eli	Mizrahi	1973-01-25
542	Rivka	Sharabi	1980-03-04
543	Gili	Sasson	1977-10-07
544	Gili	Avraham	1999-07-18
545	Omer	Avraham	1985-11-25
546	Rivka	Avraham	1989-05-14
547	Ronen	Avraham	1977-04-03
548	Noa	Atias	2000-07-29
549	Yossi	BenDavid	1981-03-07
550	Yael	Mor	1965-12-03
551	Avi	Atias	1992-03-12
552	David	Nahum	1965-12-16
553	Gili	Halabi	1961-06-26
554	Ofir	Amsalem	1978-08-26
555	Ofir	Biton	1961-01-03
556	Dana	BenDavid	1979-07-13
557	Dana	Amsalem	1965-02-02
558	Hila	Levi	1994-07-07
559	Ronen	Avraham	1963-10-17
560	Yarden	Vaknin	2006-09-19
561	Lior	Biton	2000-04-27
562	Omer	Amsalem	1962-11-04
563	Ronen	Avraham	1981-05-27
564	Moshe	Amsalem	2003-05-20
565	Rivka	Mizrahi	1983-07-16
566	Rivka	BenDavid	1980-08-26
567	David	Katz	2005-03-17
568	Yossi	Amsalem	1987-12-09
569	Yossi	Baruch	1979-08-01
570	Yarden	Atias	2003-03-31
571	Ronen	BenDavid	1994-07-11
572	Gili	Amsalem	1993-06-02
573	Yarden	Dahan	1968-02-28
574	Nir	Sharabi	1980-07-05
575	Tal	Sasson	1979-09-04
576	Omer	Atias	1981-07-25
577	Yarden	Sasson	1999-11-20
578	Moshe	Cohen	1970-04-10
579	Shira	Mor	1972-10-26
580	Shira	Levi	1962-11-30
581	Gili	Biton	2000-11-01
582	Shira	Mizrahi	1980-04-30
583	Gili	Nahum	1998-01-22
584	Lior	Nahum	1983-10-20
585	Rivka	Mor	1990-08-31
586	Ronen	BenDavid	1980-07-05
587	Dana	BenDavid	1954-10-26
588	Noa	Baruch	1995-08-27
589	Rivka	Levi	1971-04-08
590	Moshe	Sasson	1970-11-04
591	Yossi	Atias	1975-10-29
592	Omer	Nahum	1986-01-04
593	Tamar	Dahan	1976-08-14
594	David	Baruch	2005-03-20
595	Omer	Amsalem	1996-09-01
596	Yarden	Mor	1992-01-09
597	Lior	BenDavid	1995-03-17
598	Ofir	Avraham	1994-12-08
599	Shira	Vaknin	1992-01-26
600	Nir	Baruch	2000-10-13
601	Eli	Baruch	1982-12-28
602	Yarden	Azoulay	1966-01-18
603	Gili	Levi	1993-09-09
604	Lior	Atias	1985-03-08
605	Avi	Halabi	1983-12-08
606	Moshe	Cohen	2000-11-09
607	Lior	Baruch	1997-03-22
608	Tal	Amsalem	1974-06-22
609	Rivka	Mizrahi	1990-01-02
610	Nir	Halabi	1983-01-22
611	Shira	Mizrahi	1983-11-25
612	Nir	Mizrahi	2004-03-19
613	Dana	Cohen	1967-12-29
614	Lior	Biton	2005-03-08
615	Tamar	Dahan	1955-08-10
616	Tal	Nahum	1989-06-10
617	Ofir	BenDavid	1989-06-30
618	Yael	Halabi	2001-05-10
619	Omer	Nahum	1994-01-15
620	Ofir	Sasson	1984-05-07
621	Omer	Katz	1974-03-05
622	Moshe	Levi	1982-06-29
623	Gili	Peretz	1997-06-06
624	Shira	Baruch	1982-08-14
625	Rivka	Cohen	1989-10-11
626	Avi	Nahum	1979-03-14
627	Moshe	Avraham	2000-03-18
628	Dana	Vaknin	1955-06-13
629	Ronen	Sasson	1971-03-06
630	Tal	Nahum	1960-03-27
631	Rivka	BenDavid	1956-07-02
632	Yossi	Cohen	1973-10-20
633	Ronen	Peretz	2006-11-30
634	Noa	Sharabi	1993-07-14
635	Eli	Avraham	1990-05-08
636	Dana	Sasson	1954-05-09
637	Shira	Baruch	2005-10-20
638	Avi	Dahan	1971-05-14
639	Noa	Biton	1973-10-30
640	David	Shalom	1965-12-23
641	Yael	Vaknin	1976-07-22
642	Gili	Atias	2003-06-27
643	Yossi	Peretz	1962-02-13
644	Yossi	Dahan	1965-01-05
645	Moshe	Vaknin	1986-05-16
646	Omer	Shalom	1986-01-17
647	Moshe	Dahan	1975-05-17
648	Yossi	Baruch	1989-03-27
649	Nir	Mor	1975-07-05
650	Gili	Azoulay	1955-03-30
651	Hila	Mor	1974-01-29
652	Rivka	Avraham	1983-09-12
653	Yarden	Amsalem	1988-05-08
654	David	Cohen	1978-08-15
655	Shira	Mizrahi	1985-09-05
656	Omer	Katz	2000-11-12
657	Avi	Peretz	1962-07-03
658	Yael	Mor	1975-09-05
659	Rivka	Azoulay	1972-10-06
660	Yossi	Azoulay	1985-06-22
661	Tamar	Shalom	1964-01-01
662	Ofir	BenDavid	1998-12-25
663	Avi	Sharabi	1997-04-01
664	Yossi	Azoulay	2002-02-03
665	Nir	Mizrahi	1997-08-31
666	Ronen	Biton	1966-10-04
667	Omer	Halabi	1968-01-13
668	Hila	Cohen	1977-12-23
669	Dana	Avraham	1975-06-12
670	Noa	Katz	1997-12-28
671	Noa	Biton	1998-05-09
672	Shira	Mizrahi	1988-12-25
673	Tal	Mizrahi	1981-06-14
674	Yossi	Baruch	1989-05-30
675	Noa	Halabi	2006-01-20
676	Eli	Nahum	1963-03-16
677	Yossi	Sharabi	1992-05-01
678	Tamar	Atias	1988-07-05
679	Moshe	Avraham	2003-07-10
680	David	Mor	1974-06-07
681	Lior	Vaknin	2005-10-07
682	Yael	Shalom	1971-10-10
683	Dana	Nahum	1978-04-28
684	Yossi	Nahum	1984-02-27
685	Gili	Levi	1966-12-18
686	Ofir	Dahan	1954-11-15
687	Tal	Halabi	1976-05-15
688	Dana	Avraham	1955-12-14
689	Gili	Baruch	2006-09-15
690	Tal	Sasson	1975-12-03
691	Avi	Amsalem	1992-09-01
692	Gili	Shalom	1959-05-16
693	Nir	Mizrahi	1958-08-06
694	Tamar	BenDavid	2003-12-21
695	David	BenDavid	1977-03-10
696	Nir	Katz	1973-01-12
697	Hila	Levi	1995-11-13
698	Moshe	Dahan	1954-09-17
699	David	Dahan	1996-08-03
700	Yossi	Amsalem	1983-12-01
701	Avi	Cohen	1956-03-26
702	Eli	Sasson	1990-11-17
703	Ronen	Halabi	1984-05-30
704	Moshe	Peretz	1958-02-23
705	Tamar	Peretz	1966-02-05
706	Yossi	Biton	1958-07-20
707	Eli	Shalom	1965-05-24
708	Dana	Vaknin	2006-04-12
709	Omer	Katz	1954-05-09
710	Ofir	Vaknin	2004-12-26
711	David	Biton	1976-01-06
712	Moshe	Amsalem	1964-12-22
713	Nir	Azoulay	2007-03-11
714	Ronen	Biton	1963-09-28
715	Dana	Vaknin	2000-09-21
716	Tal	Nahum	1963-05-23
717	Tal	Nahum	2006-02-05
718	Tamar	Shalom	1967-11-23
719	Nir	Sharabi	1980-07-11
720	Yarden	Mizrahi	1955-11-28
721	Avi	Levi	1988-11-29
722	Omer	Nahum	1969-09-24
723	Ofir	Baruch	1971-01-18
724	Omer	Levi	1961-03-30
725	Tamar	Mor	1980-02-19
726	Yael	Mor	1996-10-16
727	Yael	Katz	1968-04-05
728	Yarden	Levi	1966-11-14
729	Rivka	Atias	1996-09-17
730	Nir	Sharabi	1994-11-22
731	Nir	Halabi	1997-04-25
732	Rivka	Azoulay	1971-01-23
733	Lior	Cohen	1985-08-21
734	Yossi	Sasson	1964-07-19
735	Omer	Katz	1970-03-07
736	Shira	Sasson	1977-12-28
737	Hila	Dahan	1995-11-06
738	Eli	Dahan	1967-02-27
739	Dana	Avraham	1989-11-12
740	Tal	BenDavid	1971-01-14
741	Ofir	Mizrahi	1968-09-07
742	Noa	Mor	1960-01-09
743	Nir	Baruch	1972-03-04
744	Hila	Peretz	1976-03-03
745	Dana	Atias	2007-01-27
746	Avi	Nahum	1976-09-01
747	Yarden	Mizrahi	1992-01-09
748	Lior	Cohen	1999-06-22
749	Tamar	Dahan	1985-05-29
750	Dana	Katz	1967-12-21
751	Noa	Halabi	2003-06-30
752	Omer	Nahum	1994-01-17
753	Lior	Sasson	1954-09-05
754	Omer	Vaknin	1975-12-24
755	Yael	Azoulay	2001-12-20
756	Ofir	Vaknin	1962-12-21
757	Yossi	BenDavid	1955-09-12
758	Tamar	Katz	1998-11-17
759	Yossi	Sharabi	1976-05-25
760	David	Vaknin	1992-08-01
761	Dana	Shalom	1985-02-17
762	Tamar	Avraham	1963-08-11
763	Yossi	Sharabi	1962-06-08
764	Omer	Peretz	1954-11-07
765	Hila	Biton	1977-09-29
766	Noa	Dahan	2006-08-02
767	Avi	Levi	2000-12-30
768	David	Katz	1987-06-14
769	Tamar	Baruch	1997-07-04
770	Gili	Mizrahi	1983-10-19
771	Moshe	BenDavid	2004-08-27
772	Noa	Vaknin	1982-08-10
773	David	BenDavid	2000-06-18
774	Yarden	Shalom	1997-03-29
775	Ronen	Azoulay	1957-09-28
776	Shira	Azoulay	1986-07-06
777	Gili	Levi	1982-07-09
778	Dana	Baruch	1969-11-14
779	Avi	Avraham	1954-04-24
780	Yossi	Katz	1993-01-31
781	Omer	Levi	1989-01-01
782	Ronen	Atias	1999-09-13
783	Hila	Atias	1985-07-27
784	Ofir	BenDavid	1968-02-18
785	Yael	Nahum	1987-01-08
786	Yossi	Avraham	2004-01-27
787	Yarden	Katz	1976-03-03
788	Yael	Vaknin	1971-05-20
789	Nir	Avraham	1972-01-20
790	Nir	Biton	2003-03-19
791	Eli	Halabi	1956-05-01
792	Tamar	Amsalem	1971-11-12
793	Ronen	Atias	1996-11-16
794	Avi	BenDavid	1993-11-07
795	Ronen	Biton	1989-06-13
796	Yarden	Levi	1992-10-07
797	Hila	Azoulay	2003-07-05
798	Tal	Mor	1955-06-22
799	Yossi	Baruch	1978-01-30
800	Hila	Vaknin	1962-12-16
74	Eli	Sasson	2000-01-01
\.


--
-- TOC entry 3442 (class 0 OID 16726)
-- Dependencies: 223
-- Data for Name: repair; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.repair (personid, date, deviceid, zoneid, gymid, specialnotes, servicetype) FROM stdin;
439	2025-02-17 13:32:49	473	7	196	Ordered replacement parts	Upgrade
669	2025-02-15 13:24:15	1033	6	271	Cleared dust accumulation	Urgent Repair
412	2024-08-29 13:12:06	103	8	178	Upgraded firmware	Maintenance
427	2025-02-27 09:55:36	341	5	35	Performed routine checkup	Urgent Repair
616	2025-02-05 12:31:05	475	5	144	Cleared dust accumulation	Upgrade
601	2024-08-22 17:34:45	781	3	148	Performed routine checkup	Maintenance
500	2024-05-30 15:22:01	1241	7	215	Replaced faulty part	Inspection
545	2024-05-11 03:55:29	349	7	370	Ordered replacement parts	Upgrade
698	2024-05-01 05:10:48	1139	9	189	Lubricated moving parts	Urgent Repair
667	2024-09-06 00:26:05	1443	7	52	Minor fix only	Replacement
593	2024-12-03 18:15:51	654	9	72	Cleared dust accumulation	Maintenance
438	2024-06-13 20:05:14	1023	10	37	Replaced faulty part	Upgrade
544	2024-11-14 06:04:23	1339	8	398	Adjusted alignment	Maintenance
659	2025-03-24 13:31:35	968	7	378	Lubricated moving parts	Maintenance
625	2025-02-26 14:17:20	754	8	238	Performed routine checkup	Replacement
690	2024-08-18 09:41:44	498	2	83	Detailed inspection completed	Urgent Repair
512	2024-09-15 07:54:23	1468	6	341	Adjusted alignment	Upgrade
645	2024-06-05 03:47:13	538	9	184	Ordered replacement parts	Urgent Repair
557	2024-10-24 09:17:07	460	2	48	Performed routine checkup	Replacement
610	2025-01-13 20:02:08	170	8	32	Found worn cable	Upgrade
450	2025-03-18 07:52:57	1085	6	187	Found worn cable	Maintenance
774	2024-05-14 00:23:44	592	1	324	Minor fix only	Replacement
700	2025-01-29 12:13:54	335	6	1	Adjusted alignment	Inspection
440	2024-07-01 04:05:47	1084	4	237	Adjusted alignment	Inspection
425	2024-12-16 19:05:46	769	9	62	Found worn cable	Upgrade
668	2024-08-22 22:52:57	1356	9	28	Replaced faulty part	Inspection
444	2024-08-16 00:39:07	163	1	158	Minor fix only	Replacement
610	2024-09-02 05:05:10	1172	8	229	Lubricated moving parts	Inspection
528	2024-08-23 08:14:15	1282	9	284	Found worn cable	Inspection
681	2025-02-02 18:51:39	975	7	85	Upgraded firmware	Upgrade
500	2024-05-13 04:14:42	884	5	212	Replaced faulty part	Urgent Repair
614	2024-12-22 05:08:00	16	8	105	Adjusted alignment	Replacement
565	2024-10-10 00:50:05	843	7	19	Lubricated moving parts	Upgrade
661	2024-11-09 19:41:43	1077	6	264	Replaced faulty part	Maintenance
708	2024-07-04 19:10:02	1267	7	265	Lubricated moving parts	Replacement
782	2024-08-02 21:23:30	1196	10	202	Replaced faulty part	Urgent Repair
548	2024-05-04 09:36:37	1257	8	23	Upgraded firmware	Inspection
578	2024-04-05 19:18:20	1256	8	23	Lubricated moving parts	Maintenance
412	2025-03-24 23:35:54	465	6	208	Replaced faulty part	Maintenance
760	2024-09-01 02:43:27	718	5	266	Ordered replacement parts	Replacement
753	2024-07-06 00:28:21	776	6	300	Replaced faulty part	Upgrade
619	2024-11-30 08:28:31	1303	2	87	Ordered replacement parts	Replacement
557	2024-10-04 08:39:37	1338	2	93	Performed routine checkup	Upgrade
782	2025-02-18 16:48:29	829	3	192	Minor fix only	Replacement
641	2024-10-05 01:12:42	263	1	52	Lubricated moving parts	Inspection
583	2024-08-25 14:32:18	1204	9	116	Cleared dust accumulation	Inspection
766	2024-05-11 17:10:57	1042	9	299	Cleared dust accumulation	Upgrade
416	2024-06-20 03:07:59	1381	7	279	Found worn cable	Inspection
545	2025-01-28 14:36:53	843	7	19	Adjusted alignment	Replacement
709	2024-12-12 16:19:33	745	5	105	Adjusted alignment	Replacement
515	2025-03-02 06:52:18	50	5	288	Minor fix only	Replacement
484	2025-01-18 03:21:38	346	5	299	Lubricated moving parts	Maintenance
444	2024-05-21 00:18:03	1431	4	149	Cleared dust accumulation	Replacement
403	2025-01-18 08:34:00	1006	8	301	Performed routine checkup	Urgent Repair
725	2024-10-26 02:35:58	834	9	327	Adjusted alignment	Upgrade
421	2024-12-14 01:17:39	1176	2	230	Upgraded firmware	Maintenance
479	2025-02-18 19:04:15	1198	2	185	Cleared dust accumulation	Maintenance
624	2024-10-23 18:12:26	1335	9	175	Upgraded firmware	Upgrade
450	2024-06-11 01:15:09	99	1	242	Detailed inspection completed	Inspection
648	2024-10-18 06:14:44	1279	3	139	Adjusted alignment	Replacement
422	2025-02-04 11:29:07	1313	10	255	Lubricated moving parts	Inspection
781	2025-02-25 02:46:44	1306	7	41	Minor fix only	Urgent Repair
441	2024-07-12 09:39:54	169	3	170	Detailed inspection completed	Urgent Repair
674	2024-12-19 02:11:26	1462	6	176	Ordered replacement parts	Urgent Repair
408	2025-02-28 17:54:59	813	4	137	Detailed inspection completed	Inspection
558	2025-01-10 02:48:20	924	7	77	Lubricated moving parts	Inspection
588	2024-08-05 00:28:40	587	10	312	Lubricated moving parts	Maintenance
761	2025-01-31 22:17:33	759	10	247	Upgraded firmware	Urgent Repair
690	2024-09-14 03:10:56	1233	1	166	Replaced faulty part	Upgrade
468	2024-08-10 23:12:10	785	5	86	Lubricated moving parts	Maintenance
722	2024-08-22 13:49:39	797	6	5	Ordered replacement parts	Replacement
497	2024-07-02 00:42:26	240	5	15	Found worn cable	Urgent Repair
757	2024-11-11 16:58:33	707	1	29	Replaced faulty part	Urgent Repair
609	2024-09-24 11:00:17	465	6	208	Adjusted alignment	Urgent Repair
457	2024-09-15 23:50:56	264	3	253	Detailed inspection completed	Replacement
585	2025-01-25 14:15:48	1437	1	184	Adjusted alignment	Replacement
469	2025-01-28 01:38:24	1141	8	140	Adjusted alignment	Urgent Repair
592	2024-05-21 08:26:48	1223	6	335	Ordered replacement parts	Maintenance
481	2025-03-05 08:02:36	782	6	113	Adjusted alignment	Urgent Repair
530	2024-10-24 02:58:38	1239	10	32	Performed routine checkup	Upgrade
518	2024-08-17 14:53:04	248	1	152	Minor fix only	Urgent Repair
707	2024-07-25 04:43:51	494	3	206	Lubricated moving parts	Upgrade
479	2024-12-02 16:33:33	722	2	314	Replaced faulty part	Maintenance
797	2024-10-24 10:10:28	785	5	86	Upgraded firmware	Upgrade
594	2024-07-10 03:36:08	675	2	232	Lubricated moving parts	Upgrade
690	2024-09-30 09:43:18	431	7	231	Ordered replacement parts	Replacement
798	2024-11-14 21:05:11	1028	5	165	Detailed inspection completed	Maintenance
780	2024-12-16 18:06:35	249	1	152	Detailed inspection completed	Upgrade
750	2024-09-08 15:49:05	491	3	102	Cleared dust accumulation	Urgent Repair
708	2025-01-17 15:03:02	183	2	280	Adjusted alignment	Upgrade
596	2024-10-16 07:13:25	1208	7	159	Cleared dust accumulation	Inspection
407	2024-09-22 05:46:49	1420	6	184	Lubricated moving parts	Replacement
720	2024-09-19 12:58:52	1279	3	139	Adjusted alignment	Maintenance
608	2024-07-09 17:36:07	369	9	39	Minor fix only	Replacement
474	2024-09-30 11:42:27	412	3	389	Cleared dust accumulation	Upgrade
628	2024-07-20 20:51:18	577	7	312	Adjusted alignment	Upgrade
764	2024-08-11 23:42:54	724	5	34	Upgraded firmware	Maintenance
650	2024-11-05 11:34:16	322	8	313	Minor fix only	Upgrade
635	2024-08-18 07:38:12	280	8	350	Upgraded firmware	Upgrade
601	2024-10-26 09:18:42	359	6	63	Minor fix only	Maintenance
635	2025-02-08 15:13:02	834	9	327	Upgraded firmware	Inspection
707	2024-10-26 16:09:50	330	7	92	Performed routine checkup	Maintenance
624	2024-10-31 08:06:35	537	3	75	Upgraded firmware	Maintenance
753	2024-08-28 02:08:12	1124	5	396	Ordered replacement parts	Maintenance
599	2025-01-13 06:46:01	683	10	321	Lubricated moving parts	Urgent Repair
692	2024-10-08 04:24:41	357	3	161	Detailed inspection completed	Replacement
442	2025-02-12 23:57:54	594	3	242	Cleared dust accumulation	Upgrade
790	2024-04-10 13:34:02	1231	1	166	Replaced faulty part	Urgent Repair
547	2025-03-05 22:24:11	377	5	214	Performed routine checkup	Inspection
450	2024-10-16 18:52:32	630	9	240	Detailed inspection completed	Upgrade
517	2024-11-04 07:46:32	384	8	280	Found worn cable	Replacement
516	2025-03-16 15:36:47	836	8	322	Replaced faulty part	Urgent Repair
615	2025-04-02 16:38:04	465	6	208	Lubricated moving parts	Replacement
530	2024-10-11 13:27:38	1119	6	26	Cleared dust accumulation	Inspection
761	2025-03-30 13:27:51	1044	1	216	Ordered replacement parts	Replacement
540	2024-12-04 10:16:33	36	10	308	Lubricated moving parts	Maintenance
429	2025-03-09 14:35:08	229	2	134	Upgraded firmware	Urgent Repair
795	2025-01-27 17:45:05	1340	8	398	Lubricated moving parts	Inspection
668	2025-02-26 02:41:36	1340	8	398	Detailed inspection completed	Urgent Repair
778	2024-05-30 11:25:19	295	5	328	Upgraded firmware	Upgrade
636	2024-09-09 00:41:35	357	3	161	Performed routine checkup	Maintenance
537	2025-02-04 12:10:49	634	8	228	Cleared dust accumulation	Maintenance
757	2025-01-25 00:29:32	932	8	204	Adjusted alignment	Replacement
527	2024-08-17 23:46:13	604	5	387	Detailed inspection completed	Upgrade
418	2024-10-03 02:42:55	1400	7	247	Performed routine checkup	Upgrade
592	2024-12-21 18:03:04	1011	10	315	Found worn cable	Replacement
646	2025-03-12 13:41:08	294	5	301	Cleared dust accumulation	Inspection
456	2024-10-08 09:52:03	158	3	211	Upgraded firmware	Inspection
704	2025-03-31 11:15:48	53	2	209	Minor fix only	Urgent Repair
461	2024-07-08 00:36:06	1318	6	153	Upgraded firmware	Urgent Repair
536	2024-08-26 21:28:20	864	8	283	Ordered replacement parts	Inspection
616	2024-12-11 01:34:53	1217	5	47	Replaced faulty part	Upgrade
565	2024-12-24 14:51:10	941	9	243	Minor fix only	Urgent Repair
686	2025-03-10 03:03:38	1288	7	399	Upgraded firmware	Maintenance
646	2024-04-17 17:06:30	493	3	206	Performed routine checkup	Maintenance
454	2024-10-20 10:11:46	19	8	194	Ordered replacement parts	Urgent Repair
767	2024-04-15 00:40:37	714	1	7	Minor fix only	Urgent Repair
577	2024-08-20 16:02:51	1149	6	330	Replaced faulty part	Inspection
699	2024-10-21 04:54:00	106	9	177	Cleared dust accumulation	Upgrade
746	2024-12-07 01:54:29	840	10	41	Performed routine checkup	Inspection
468	2025-03-16 23:45:18	564	2	188	Detailed inspection completed	Upgrade
748	2024-10-14 20:05:40	1140	9	189	Detailed inspection completed	Urgent Repair
781	2024-10-13 07:04:15	513	6	78	Ordered replacement parts	Maintenance
757	2025-03-10 08:12:30	1120	6	26	Minor fix only	Replacement
727	2024-05-20 00:25:56	85	3	248	Detailed inspection completed	Maintenance
623	2024-10-10 03:25:49	1404	5	136	Adjusted alignment	Upgrade
581	2024-12-24 01:40:53	160	1	212	Cleared dust accumulation	Upgrade
698	2024-12-21 18:54:52	815	8	328	Cleared dust accumulation	Maintenance
798	2024-07-19 13:39:06	1290	5	394	Cleared dust accumulation	Replacement
403	2024-08-19 16:15:41	449	7	347	Upgraded firmware	Replacement
556	2024-10-21 03:28:52	405	2	361	Found worn cable	Maintenance
671	2024-10-30 15:43:28	1026	5	61	Cleared dust accumulation	Inspection
443	2025-01-18 13:38:46	1115	9	196	Minor fix only	Maintenance
626	2024-06-19 12:40:14	338	6	311	Adjusted alignment	Inspection
736	2025-01-22 11:33:16	1040	10	131	Performed routine checkup	Urgent Repair
523	2024-04-16 09:59:05	458	2	48	Detailed inspection completed	Urgent Repair
483	2024-06-25 00:21:30	408	2	39	Cleared dust accumulation	Urgent Repair
490	2024-12-01 18:14:14	256	4	177	Minor fix only	Maintenance
736	2024-08-26 07:22:35	772	2	321	Detailed inspection completed	Replacement
530	2024-11-07 17:37:08	1370	9	262	Found worn cable	Urgent Repair
660	2024-11-18 17:40:33	1250	9	10	Adjusted alignment	Upgrade
484	2024-08-06 21:46:55	707	1	29	Adjusted alignment	Inspection
473	2024-11-11 11:32:32	799	2	377	Minor fix only	Inspection
488	2024-04-11 01:21:07	802	4	188	Minor fix only	Maintenance
436	2024-05-08 23:27:43	1274	5	164	Ordered replacement parts	Inspection
686	2024-06-23 14:08:53	519	7	186	Replaced faulty part	Maintenance
723	2024-05-11 15:43:01	236	8	195	Found worn cable	Replacement
769	2024-12-16 04:23:39	1335	9	175	Cleared dust accumulation	Replacement
640	2024-09-01 03:41:35	651	3	272	Minor fix only	Replacement
766	2024-05-19 21:24:01	151	5	392	Ordered replacement parts	Maintenance
480	2025-02-27 02:15:11	922	7	77	Ordered replacement parts	Replacement
510	2024-09-26 03:27:16	495	10	70	Upgraded firmware	Urgent Repair
558	2024-09-03 11:35:12	609	5	41	Upgraded firmware	Urgent Repair
578	2024-10-19 08:02:11	268	3	17	Minor fix only	Replacement
588	2024-09-13 20:23:24	756	1	251	Minor fix only	Replacement
604	2025-03-09 14:07:04	587	10	312	Replaced faulty part	Maintenance
583	2024-11-28 19:56:42	598	1	197	Detailed inspection completed	Replacement
768	2025-01-08 16:05:31	1198	2	185	Detailed inspection completed	Maintenance
670	2024-07-19 08:23:27	1483	4	123	Adjusted alignment	Maintenance
675	2025-02-27 01:56:04	643	1	210	Replaced faulty part	Upgrade
766	2024-11-19 09:53:04	418	3	287	Minor fix only	Maintenance
524	2025-04-02 14:49:52	654	9	72	Ordered replacement parts	Inspection
635	2024-12-10 21:23:04	524	8	155	Cleared dust accumulation	Maintenance
478	2024-12-17 14:02:24	1063	5	374	Lubricated moving parts	Inspection
732	2024-04-15 21:44:43	867	6	387	Minor fix only	Maintenance
572	2024-09-16 18:12:36	420	3	287	Detailed inspection completed	Replacement
558	2024-09-28 19:33:00	534	5	312	Cleared dust accumulation	Maintenance
613	2024-10-17 13:31:16	466	5	189	Performed routine checkup	Replacement
442	2024-12-22 05:18:24	519	7	186	Adjusted alignment	Replacement
787	2024-10-16 08:22:50	20	8	194	Ordered replacement parts	Urgent Repair
569	2024-12-18 12:27:25	1410	9	224	Lubricated moving parts	Inspection
781	2025-04-01 06:44:25	345	5	299	Detailed inspection completed	Upgrade
748	2024-09-05 12:00:00	416	8	6	Lubricated moving parts	Urgent Repair
551	2025-01-14 02:42:14	710	1	224	Upgraded firmware	Upgrade
562	2025-03-17 06:14:14	655	2	132	Lubricated moving parts	Upgrade
415	2024-10-10 09:42:08	722	2	314	Lubricated moving parts	Replacement
569	2024-10-22 15:34:54	1408	8	92	Lubricated moving parts	Maintenance
667	2024-12-09 14:00:30	566	7	43	Performed routine checkup	Replacement
480	2024-08-10 09:01:02	39	2	397	Minor fix only	Upgrade
758	2024-11-30 02:32:26	828	8	30	Upgraded firmware	Replacement
440	2025-03-18 00:35:02	563	2	188	Upgraded firmware	Maintenance
658	2025-03-29 16:11:22	527	8	378	Cleared dust accumulation	Inspection
777	2024-05-15 23:41:47	1350	7	329	Replaced faulty part	Inspection
435	2024-09-29 17:47:13	1241	7	215	Adjusted alignment	Urgent Repair
609	2024-09-10 09:48:20	67	10	391	Minor fix only	Urgent Repair
654	2024-11-05 01:36:21	345	5	299	Replaced faulty part	Maintenance
512	2024-09-16 11:48:24	1283	9	284	Performed routine checkup	Urgent Repair
698	2024-06-09 21:55:29	728	4	53	Detailed inspection completed	Urgent Repair
546	2024-05-27 22:35:19	403	9	90	Upgraded firmware	Maintenance
565	2024-10-27 14:19:47	848	10	395	Performed routine checkup	Replacement
698	2025-01-01 16:24:54	979	5	295	Minor fix only	Replacement
699	2025-03-27 11:15:17	256	4	177	Found worn cable	Replacement
635	2024-06-24 04:51:18	681	10	321	Adjusted alignment	Maintenance
541	2024-07-13 07:22:47	228	2	134	Detailed inspection completed	Urgent Repair
647	2024-08-05 22:57:58	446	3	171	Replaced faulty part	Inspection
785	2024-06-22 22:27:55	614	9	156	Performed routine checkup	Replacement
434	2025-03-06 09:40:04	114	7	144	Ordered replacement parts	Urgent Repair
620	2024-10-05 12:58:03	1440	2	108	Lubricated moving parts	Urgent Repair
610	2024-07-18 00:41:24	438	7	278	Replaced faulty part	Urgent Repair
730	2024-06-18 08:27:29	628	3	298	Found worn cable	Maintenance
536	2024-08-27 06:59:58	881	7	12	Minor fix only	Urgent Repair
787	2025-02-17 13:13:37	507	10	355	Replaced faulty part	Inspection
579	2024-08-14 03:45:45	1323	8	193	Minor fix only	Maintenance
625	2024-09-22 06:04:55	1136	9	372	Detailed inspection completed	Replacement
754	2025-02-07 07:12:15	1283	9	284	Minor fix only	Inspection
611	2024-08-29 11:48:18	50	5	288	Found worn cable	Urgent Repair
674	2025-03-15 23:24:55	725	5	148	Found worn cable	Replacement
524	2024-12-24 01:58:26	1236	10	347	Ordered replacement parts	Maintenance
422	2024-07-31 06:27:49	1171	8	229	Upgraded firmware	Upgrade
635	2024-12-11 19:48:05	1054	1	178	Upgraded firmware	Upgrade
652	2024-12-11 15:29:42	696	2	168	Detailed inspection completed	Urgent Repair
578	2024-12-18 19:07:02	1065	8	213	Ordered replacement parts	Inspection
426	2025-03-25 20:33:11	1431	4	149	Adjusted alignment	Urgent Repair
688	2024-04-26 13:42:43	36	10	308	Adjusted alignment	Maintenance
501	2025-01-05 01:53:23	326	7	346	Cleared dust accumulation	Replacement
677	2024-04-09 00:14:05	575	7	213	Cleared dust accumulation	Inspection
424	2025-01-05 02:56:52	293	5	301	Minor fix only	Upgrade
680	2025-03-26 12:50:43	365	6	76	Detailed inspection completed	Urgent Repair
734	2024-06-09 13:11:25	431	7	231	Minor fix only	Upgrade
576	2025-02-12 18:13:58	1417	3	399	Replaced faulty part	Upgrade
498	2025-03-29 14:51:45	1350	7	329	Upgraded firmware	Upgrade
722	2024-08-09 10:08:08	159	3	211	Found worn cable	Urgent Repair
508	2024-06-14 03:17:59	525	8	155	Found worn cable	Replacement
799	2025-01-02 01:01:36	568	2	171	Found worn cable	Maintenance
655	2024-04-28 18:09:10	1348	10	12	Detailed inspection completed	Upgrade
525	2025-01-03 15:26:14	1358	1	156	Ordered replacement parts	Urgent Repair
745	2024-09-11 03:52:07	494	3	206	Adjusted alignment	Replacement
763	2025-02-20 14:51:55	323	8	386	Cleared dust accumulation	Inspection
596	2024-10-26 04:07:19	1037	7	327	Lubricated moving parts	Urgent Repair
655	2024-08-11 15:44:12	377	5	214	Cleared dust accumulation	Maintenance
525	2025-03-09 10:11:48	1185	2	178	Found worn cable	Maintenance
543	2024-06-20 13:30:40	196	5	371	Ordered replacement parts	Upgrade
690	2024-08-30 06:17:42	716	6	350	Lubricated moving parts	Urgent Repair
415	2024-11-30 23:11:47	668	8	271	Minor fix only	Upgrade
491	2025-03-24 09:18:20	1320	8	384	Performed routine checkup	Maintenance
665	2024-04-22 08:10:24	1139	9	189	Cleared dust accumulation	Inspection
591	2024-10-24 14:25:42	467	5	189	Adjusted alignment	Maintenance
611	2024-09-12 13:20:28	285	3	246	Adjusted alignment	Urgent Repair
402	2025-01-27 18:42:45	595	5	124	Found worn cable	Replacement
537	2025-01-22 14:02:51	1187	2	186	Ordered replacement parts	Replacement
536	2024-08-19 13:02:53	242	10	246	Lubricated moving parts	Replacement
782	2024-05-29 11:23:26	458	2	48	Ordered replacement parts	Replacement
485	2024-07-15 01:44:31	1124	5	396	Replaced faulty part	Maintenance
485	2025-01-28 20:09:06	375	5	196	Adjusted alignment	Upgrade
762	2024-09-24 13:57:37	379	8	318	Minor fix only	Inspection
677	2024-09-04 16:16:03	1313	10	255	Detailed inspection completed	Maintenance
722	2025-01-04 05:40:48	177	2	51	Adjusted alignment	Maintenance
776	2024-09-27 05:53:05	766	6	55	Adjusted alignment	Replacement
732	2024-12-22 17:04:43	1242	7	215	Found worn cable	Inspection
548	2025-03-01 09:48:33	1020	1	150	Lubricated moving parts	Urgent Repair
661	2025-02-01 10:56:56	63	10	346	Performed routine checkup	Inspection
705	2025-02-07 01:48:22	1432	4	149	Performed routine checkup	Maintenance
438	2025-01-04 22:01:05	684	4	238	Minor fix only	Maintenance
744	2024-11-21 17:31:38	1243	3	98	Adjusted alignment	Upgrade
690	2024-11-02 05:12:34	90	7	98	Adjusted alignment	Replacement
626	2024-10-14 11:30:55	91	7	98	Found worn cable	Replacement
691	2024-07-06 10:29:27	817	8	328	Lubricated moving parts	Urgent Repair
662	2024-07-31 21:05:39	18	8	194	Ordered replacement parts	Urgent Repair
479	2024-06-17 20:38:34	63	10	346	Replaced faulty part	Replacement
632	2024-04-08 08:52:01	1398	1	249	Minor fix only	Maintenance
436	2024-04-19 03:05:20	500	2	83	Upgraded firmware	Urgent Repair
758	2024-05-24 13:39:14	409	2	39	Found worn cable	Inspection
519	2024-08-14 23:29:33	546	7	198	Minor fix only	Upgrade
401	2024-05-02 10:06:39	1138	9	189	Ordered replacement parts	Inspection
526	2024-10-02 07:01:45	682	10	321	Lubricated moving parts	Replacement
727	2025-03-12 09:56:03	119	1	239	Adjusted alignment	Maintenance
445	2024-08-11 07:30:16	1402	8	358	Upgraded firmware	Upgrade
791	2025-03-01 14:30:45	998	4	320	Ordered replacement parts	Inspection
688	2024-12-17 03:30:19	983	10	100	Ordered replacement parts	Maintenance
739	2024-08-02 23:08:43	1079	4	255	Lubricated moving parts	Urgent Repair
716	2024-11-26 22:05:59	901	5	32	Ordered replacement parts	Replacement
728	2024-06-22 01:35:30	525	8	155	Adjusted alignment	Urgent Repair
484	2024-06-30 18:07:10	881	7	12	Ordered replacement parts	Urgent Repair
635	2024-10-07 00:34:19	265	3	253	Cleared dust accumulation	Inspection
643	2024-09-03 03:36:52	1296	6	240	Upgraded firmware	Replacement
656	2024-11-15 16:13:18	298	10	254	Detailed inspection completed	Maintenance
407	2024-10-05 19:19:37	645	8	297	Upgraded firmware	Maintenance
615	2024-07-20 06:13:45	767	1	203	Found worn cable	Replacement
713	2024-07-05 02:08:15	1111	2	320	Ordered replacement parts	Replacement
468	2025-03-08 00:00:19	1207	10	309	Detailed inspection completed	Urgent Repair
767	2024-08-10 16:46:00	1081	1	70	Cleared dust accumulation	Upgrade
433	2025-02-02 10:22:16	468	5	360	Ordered replacement parts	Urgent Repair
697	2024-04-21 04:24:55	510	6	33	Adjusted alignment	Upgrade
800	2025-03-18 17:29:16	448	7	347	Ordered replacement parts	Replacement
795	2025-03-17 10:43:51	65	5	364	Minor fix only	Replacement
547	2025-02-28 23:09:01	32	3	104	Cleared dust accumulation	Replacement
407	2025-03-12 05:27:00	324	8	386	Upgraded firmware	Upgrade
722	2024-07-11 00:43:01	1098	9	357	Performed routine checkup	Inspection
517	2025-01-07 15:55:25	1171	8	229	Found worn cable	Upgrade
704	2024-06-10 19:31:28	1451	7	336	Found worn cable	Maintenance
708	2024-06-27 08:49:08	777	6	300	Cleared dust accumulation	Urgent Repair
780	2025-01-18 11:37:42	311	5	339	Lubricated moving parts	Urgent Repair
510	2025-01-29 14:37:49	982	10	54	Minor fix only	Maintenance
490	2024-05-30 00:33:37	640	4	259	Minor fix only	Maintenance
484	2024-12-10 12:37:36	628	3	298	Lubricated moving parts	Urgent Repair
741	2025-01-02 18:58:51	224	2	290	Lubricated moving parts	Upgrade
454	2024-08-20 17:33:13	151	5	392	Minor fix only	Inspection
532	2025-03-23 16:29:03	823	6	109	Lubricated moving parts	Maintenance
685	2024-04-27 07:23:54	1294	1	175	Adjusted alignment	Urgent Repair
693	2024-05-15 11:33:07	1294	1	175	Minor fix only	Replacement
717	2024-06-29 03:19:24	419	3	287	Performed routine checkup	Inspection
520	2024-06-08 10:40:59	178	3	61	Ordered replacement parts	Replacement
469	2024-10-23 16:30:56	1466	3	328	Lubricated moving parts	Urgent Repair
406	2024-09-14 01:06:26	559	10	150	Adjusted alignment	Maintenance
529	2025-01-22 03:08:25	153	5	392	Replaced faulty part	Replacement
634	2024-11-11 01:56:05	221	5	224	Ordered replacement parts	Replacement
522	2024-08-20 08:30:56	869	9	48	Upgraded firmware	Maintenance
597	2024-05-18 18:38:45	640	4	259	Detailed inspection completed	Inspection
697	2024-12-18 18:11:23	739	5	100	Detailed inspection completed	Maintenance
540	2024-07-21 22:51:10	964	5	28	Found worn cable	Maintenance
675	2024-11-24 19:30:55	392	8	82	Adjusted alignment	Maintenance
624	2025-03-25 03:22:40	614	9	156	Cleared dust accumulation	Urgent Repair
536	2024-09-11 09:43:24	972	8	72	Ordered replacement parts	Maintenance
495	2025-03-16 21:04:58	756	1	251	Upgraded firmware	Upgrade
452	2024-09-06 13:16:37	635	8	228	Lubricated moving parts	Replacement
636	2024-07-17 22:05:55	359	6	63	Minor fix only	Inspection
492	2024-11-15 23:27:17	1368	4	321	Minor fix only	Urgent Repair
589	2025-01-22 01:46:58	1313	10	255	Lubricated moving parts	Replacement
587	2024-11-20 14:52:03	225	9	306	Replaced faulty part	Maintenance
542	2024-09-04 00:27:33	1005	8	301	Upgraded firmware	Inspection
626	2024-04-14 00:42:12	213	1	289	Minor fix only	Upgrade
789	2025-01-07 10:25:39	1200	2	389	Adjusted alignment	Replacement
743	2024-10-16 15:14:37	1244	3	98	Performed routine checkup	Replacement
635	2024-12-01 01:05:30	1131	8	125	Replaced faulty part	Maintenance
490	2025-04-01 05:18:09	1084	4	237	Upgraded firmware	Upgrade
666	2024-04-13 02:49:23	893	7	258	Ordered replacement parts	Inspection
405	2024-07-19 01:44:45	1133	7	368	Minor fix only	Urgent Repair
402	2024-10-20 16:13:58	424	7	140	Performed routine checkup	Urgent Repair
767	2024-07-19 18:13:14	2	10	214	Detailed inspection completed	Replacement
609	2024-04-30 16:31:05	230	7	316	Found worn cable	Maintenance
747	2024-05-14 21:58:10	410	3	389	Adjusted alignment	Replacement
476	2024-05-11 01:33:38	805	10	240	Found worn cable	Maintenance
682	2024-11-13 10:52:17	1024	5	61	Ordered replacement parts	Urgent Repair
535	2024-04-30 12:14:46	519	7	186	Replaced faulty part	Inspection
486	2024-06-21 03:16:41	141	2	284	Lubricated moving parts	Upgrade
548	2025-03-28 14:13:47	50	5	288	Adjusted alignment	Replacement
425	2024-04-30 22:43:55	878	1	71	Ordered replacement parts	Inspection
719	2024-10-04 06:33:18	610	5	41	Adjusted alignment	Replacement
696	2024-06-09 01:04:58	611	1	228	Ordered replacement parts	Maintenance
448	2025-02-12 16:01:36	1475	8	24	Performed routine checkup	Upgrade
522	2024-09-08 05:44:18	54	2	209	Performed routine checkup	Upgrade
678	2025-02-15 00:16:19	1322	8	193	Cleared dust accumulation	Replacement
404	2024-07-28 10:42:54	209	4	62	Upgraded firmware	Maintenance
453	2024-11-10 22:39:43	1095	6	143	Ordered replacement parts	Urgent Repair
626	2025-03-20 18:14:23	785	5	86	Replaced faulty part	Maintenance
530	2025-02-10 10:04:46	538	9	184	Upgraded firmware	Urgent Repair
719	2024-04-27 11:07:59	765	6	55	Cleared dust accumulation	Urgent Repair
435	2024-07-13 15:12:55	807	7	86	Found worn cable	Urgent Repair
776	2024-06-17 14:57:59	527	8	378	Detailed inspection completed	Inspection
565	2024-09-01 03:42:07	70	2	90	Detailed inspection completed	Inspection
489	2024-10-06 16:37:42	1333	9	175	Cleared dust accumulation	Replacement
593	2025-02-15 18:14:43	258	9	202	Adjusted alignment	Maintenance
682	2025-02-12 14:44:05	400	4	93	Cleared dust accumulation	Maintenance
425	2024-09-01 23:27:49	771	2	321	Replaced faulty part	Urgent Repair
753	2024-05-31 19:07:11	152	5	392	Lubricated moving parts	Maintenance
667	2024-10-08 09:34:32	26	3	212	Minor fix only	Upgrade
468	2024-11-15 07:59:25	367	1	14	Performed routine checkup	Upgrade
747	2024-10-14 18:09:33	365	6	76	Cleared dust accumulation	Inspection
549	2025-01-18 20:25:41	8	5	250	Performed routine checkup	Urgent Repair
670	2024-07-03 02:58:31	249	1	152	Cleared dust accumulation	Maintenance
696	2024-04-10 12:57:50	587	10	312	Lubricated moving parts	Maintenance
639	2024-09-12 19:24:03	153	5	392	Detailed inspection completed	Upgrade
683	2025-03-10 16:04:47	495	10	70	Lubricated moving parts	Maintenance
439	2024-09-10 23:52:39	820	10	60	Minor fix only	Upgrade
693	2024-06-08 07:01:00	1117	2	317	Performed routine checkup	Maintenance
781	2024-11-04 22:11:36	496	10	70	Upgraded firmware	Urgent Repair
517	2024-12-27 15:27:15	1372	6	23	Lubricated moving parts	Upgrade
480	2024-05-23 03:09:15	562	7	286	Cleared dust accumulation	Urgent Repair
563	2025-03-20 04:32:58	1088	7	120	Lubricated moving parts	Upgrade
496	2024-10-12 17:31:56	540	10	385	Adjusted alignment	Replacement
462	2024-08-06 00:51:43	670	8	187	Lubricated moving parts	Maintenance
676	2024-12-06 15:20:24	35	10	308	Minor fix only	Urgent Repair
507	2024-11-10 02:37:23	935	5	239	Found worn cable	Maintenance
658	2024-10-06 17:47:57	1216	5	47	Cleared dust accumulation	Replacement
470	2024-05-12 08:00:19	892	7	258	Performed routine checkup	Replacement
450	2024-04-16 12:49:34	1379	7	279	Upgraded firmware	Inspection
646	2024-10-24 17:28:52	265	3	253	Adjusted alignment	Urgent Repair
505	2024-05-23 08:53:28	774	6	129	Found worn cable	Inspection
593	2025-02-23 15:01:53	1208	7	159	Minor fix only	Upgrade
434	2024-09-01 02:38:54	308	6	352	Performed routine checkup	Maintenance
761	2024-10-16 07:10:53	29	1	105	Lubricated moving parts	Upgrade
569	2024-07-01 16:01:39	1123	5	396	Performed routine checkup	Maintenance
616	2024-09-29 20:42:37	499	2	83	Cleared dust accumulation	Maintenance
514	2024-08-10 12:58:08	319	1	332	Ordered replacement parts	Urgent Repair
773	2024-08-12 10:39:40	1059	9	122	Detailed inspection completed	Replacement
675	2024-07-16 23:13:32	741	1	334	Found worn cable	Maintenance
524	2024-08-11 23:28:54	593	3	242	Upgraded firmware	Replacement
442	2024-04-04 13:17:06	601	8	305	Found worn cable	Inspection
687	2024-05-17 10:14:46	1219	7	100	Lubricated moving parts	Inspection
744	2024-08-10 09:39:22	774	6	129	Replaced faulty part	Maintenance
613	2024-12-29 12:29:11	423	7	140	Found worn cable	Replacement
791	2024-08-31 14:21:45	142	5	379	Ordered replacement parts	Upgrade
630	2024-09-08 09:53:23	597	1	197	Minor fix only	Inspection
518	2024-11-07 14:09:56	201	4	49	Detailed inspection completed	Replacement
656	2024-10-23 07:15:26	270	8	324	Lubricated moving parts	Upgrade
411	2024-09-30 12:38:12	249	1	152	Ordered replacement parts	Inspection
782	2024-05-17 23:11:41	1454	6	285	Replaced faulty part	Upgrade
800	2024-04-03 10:07:10	150	1	19	Ordered replacement parts	Maintenance
401	2025-02-08 03:26:28	1342	2	6	Found worn cable	Urgent Repair
608	2024-05-17 08:04:12	1026	5	61	Upgraded firmware	Inspection
416	2024-06-13 11:59:45	658	8	157	Found worn cable	Maintenance
415	2025-03-29 14:32:11	550	8	81	Found worn cable	Inspection
455	2024-06-21 12:15:17	853	2	54	Detailed inspection completed	Inspection
652	2024-12-28 20:28:36	180	4	151	Detailed inspection completed	Urgent Repair
641	2024-07-17 22:33:30	1384	4	262	Replaced faulty part	Inspection
789	2024-11-11 06:47:43	1200	2	389	Ordered replacement parts	Upgrade
583	2024-10-05 06:08:19	468	5	360	Ordered replacement parts	Replacement
691	2024-11-27 07:16:15	128	6	48	Detailed inspection completed	Replacement
507	2024-05-23 18:02:50	311	5	339	Ordered replacement parts	Replacement
571	2024-10-21 08:07:08	701	7	26	Adjusted alignment	Inspection
488	2024-06-26 18:54:27	631	9	240	Detailed inspection completed	Inspection
705	2025-02-15 23:42:12	775	6	129	Detailed inspection completed	Urgent Repair
749	2024-06-25 13:17:11	34	5	263	Upgraded firmware	Maintenance
657	2025-03-26 05:21:30	1144	6	277	Performed routine checkup	Replacement
593	2024-07-29 23:55:08	1303	2	87	Lubricated moving parts	Urgent Repair
569	2024-11-07 22:02:19	216	5	353	Minor fix only	Upgrade
539	2024-10-08 03:52:17	1357	1	156	Minor fix only	Upgrade
533	2024-11-30 15:20:03	397	6	340	Detailed inspection completed	Maintenance
454	2024-07-24 17:47:18	243	10	246	Lubricated moving parts	Replacement
581	2025-02-18 09:46:26	1394	4	279	Replaced faulty part	Upgrade
494	2024-04-06 21:42:24	51	8	64	Detailed inspection completed	Urgent Repair
725	2024-11-04 15:49:29	1389	7	289	Upgraded firmware	Urgent Repair
785	2025-03-29 17:16:23	387	1	45	Detailed inspection completed	Inspection
612	2025-03-13 11:45:40	1330	6	348	Replaced faulty part	Inspection
700	2024-11-05 11:21:16	1022	10	37	Cleared dust accumulation	Upgrade
630	2024-06-17 02:18:38	928	6	203	Found worn cable	Upgrade
575	2024-04-26 14:35:39	48	5	288	Upgraded firmware	Inspection
519	2024-07-14 06:31:07	972	8	72	Replaced faulty part	Urgent Repair
745	2024-08-15 04:01:36	1104	4	234	Performed routine checkup	Maintenance
507	2024-05-29 18:33:45	652	9	72	Detailed inspection completed	Urgent Repair
673	2024-10-02 13:38:16	570	6	163	Minor fix only	Maintenance
560	2024-07-16 08:42:56	1072	6	272	Cleared dust accumulation	Maintenance
508	2025-03-27 15:37:14	650	3	272	Adjusted alignment	Maintenance
609	2024-10-18 16:45:11	1182	4	99	Lubricated moving parts	Urgent Repair
712	2025-02-22 05:34:12	317	3	42	Found worn cable	Urgent Repair
542	2025-01-25 23:19:23	865	8	283	Cleared dust accumulation	Inspection
423	2024-09-13 03:09:47	938	7	64	Lubricated moving parts	Urgent Repair
475	2024-11-28 23:38:42	114	7	144	Ordered replacement parts	Urgent Repair
789	2025-01-16 03:37:11	1209	7	159	Detailed inspection completed	Maintenance
567	2024-07-25 04:02:26	191	8	169	Lubricated moving parts	Upgrade
588	2024-09-18 08:59:59	138	2	32	Performed routine checkup	Urgent Repair
595	2025-03-03 05:00:01	1024	5	61	Ordered replacement parts	Replacement
627	2024-06-09 05:22:05	1154	2	101	Performed routine checkup	Replacement
653	2024-06-21 17:08:53	962	4	82	Found worn cable	Replacement
721	2024-05-20 11:27:27	1001	3	238	Detailed inspection completed	Maintenance
402	2024-05-13 00:47:52	29	1	105	Found worn cable	Upgrade
513	2025-01-19 19:38:49	128	6	48	Adjusted alignment	Upgrade
659	2025-01-26 01:04:11	295	5	328	Performed routine checkup	Maintenance
502	2024-11-11 06:23:43	319	1	332	Upgraded firmware	Inspection
604	2025-03-09 05:47:03	424	7	140	Upgraded firmware	Maintenance
627	2024-09-22 16:36:26	1460	9	77	Minor fix only	Upgrade
539	2024-10-15 19:13:56	144	5	379	Minor fix only	Urgent Repair
423	2024-11-28 06:17:54	1251	6	373	Upgraded firmware	Upgrade
500	2024-06-29 18:33:17	624	8	102	Minor fix only	Inspection
557	2024-05-11 10:17:24	710	1	224	Performed routine checkup	Urgent Repair
699	2025-02-28 07:34:21	1188	2	186	Found worn cable	Urgent Repair
463	2024-05-15 03:40:37	1441	7	52	Detailed inspection completed	Inspection
713	2025-03-20 19:19:09	637	9	66	Found worn cable	Inspection
632	2024-08-21 12:54:29	597	1	197	Ordered replacement parts	Replacement
594	2024-09-16 15:59:08	1482	4	123	Found worn cable	Replacement
555	2024-09-17 09:43:52	1432	4	149	Found worn cable	Upgrade
534	2024-10-30 00:59:38	294	5	301	Found worn cable	Maintenance
581	2025-03-27 05:27:08	1474	8	24	Minor fix only	Replacement
671	2025-02-14 02:32:52	1249	9	10	Performed routine checkup	Replacement
566	2024-11-18 06:47:08	295	5	328	Replaced faulty part	Upgrade
555	2024-07-08 09:23:28	1159	4	135	Lubricated moving parts	Replacement
545	2025-03-05 17:23:46	983	10	100	Detailed inspection completed	Maintenance
684	2024-10-29 03:32:44	1398	1	249	Lubricated moving parts	Replacement
781	2025-03-02 13:33:38	1483	4	123	Lubricated moving parts	Maintenance
695	2024-09-04 16:30:58	1158	4	135	Ordered replacement parts	Replacement
675	2024-07-14 08:11:16	816	8	328	Ordered replacement parts	Inspection
666	2024-05-23 03:06:14	960	7	351	Cleared dust accumulation	Replacement
630	2025-02-05 11:38:28	298	10	254	Minor fix only	Upgrade
584	2024-09-06 05:44:35	959	7	351	Minor fix only	Maintenance
498	2024-09-24 19:18:17	259	9	202	Found worn cable	Upgrade
739	2024-10-14 03:38:39	410	3	389	Lubricated moving parts	Upgrade
541	2024-12-24 19:34:10	985	10	100	Replaced faulty part	Replacement
642	2024-09-05 12:59:12	312	5	339	Found worn cable	Replacement
448	2024-11-17 15:11:57	502	10	16	Performed routine checkup	Upgrade
788	2024-10-31 12:22:16	973	8	72	Upgraded firmware	Inspection
404	2024-05-09 11:24:55	266	3	253	Ordered replacement parts	Inspection
796	2025-02-21 09:16:10	1377	1	256	Detailed inspection completed	Urgent Repair
479	2024-07-17 19:34:33	522	8	97	Adjusted alignment	Urgent Repair
483	2025-01-20 00:42:08	412	3	389	Ordered replacement parts	Inspection
719	2025-03-27 01:11:02	328	5	279	Performed routine checkup	Maintenance
535	2024-12-20 03:09:52	1186	2	178	Detailed inspection completed	Inspection
525	2024-07-13 02:55:11	21	3	67	Upgraded firmware	Upgrade
427	2024-11-06 09:08:52	111	6	397	Minor fix only	Inspection
510	2025-02-10 23:24:20	254	7	165	Replaced faulty part	Replacement
575	2024-05-25 07:18:32	1159	4	135	Upgraded firmware	Replacement
417	2024-10-28 20:55:46	1188	2	186	Adjusted alignment	Maintenance
693	2024-04-13 12:50:44	1457	2	216	Cleared dust accumulation	Inspection
438	2025-02-06 03:36:15	465	6	208	Replaced faulty part	Inspection
533	2024-10-15 17:44:06	1053	1	178	Replaced faulty part	Replacement
426	2024-11-19 00:24:06	1259	3	354	Cleared dust accumulation	Urgent Repair
733	2025-01-16 19:09:46	683	10	321	Detailed inspection completed	Upgrade
599	2024-12-07 08:34:43	1169	1	264	Replaced faulty part	Inspection
457	2025-01-02 04:49:20	871	6	115	Ordered replacement parts	Urgent Repair
702	2024-11-17 17:47:44	241	5	15	Found worn cable	Replacement
715	2024-09-23 00:06:54	690	7	216	Performed routine checkup	Maintenance
550	2024-08-09 10:56:23	640	4	259	Ordered replacement parts	Upgrade
525	2024-07-07 10:32:45	476	4	163	Found worn cable	Upgrade
712	2024-05-09 02:47:55	1453	2	159	Ordered replacement parts	Upgrade
779	2024-08-21 17:06:42	1080	1	70	Minor fix only	Replacement
636	2024-08-14 19:48:54	272	2	244	Replaced faulty part	Replacement
604	2024-10-17 13:19:36	120	1	239	Found worn cable	Maintenance
409	2024-09-14 18:26:52	674	2	232	Upgraded firmware	Urgent Repair
591	2024-12-02 20:24:49	1320	8	384	Detailed inspection completed	Urgent Repair
733	2024-04-20 22:21:09	930	6	203	Detailed inspection completed	Urgent Repair
748	2024-08-14 01:07:49	1340	8	398	Ordered replacement parts	Inspection
478	2024-04-07 11:03:20	224	2	290	Ordered replacement parts	Upgrade
474	2024-08-29 01:35:05	1051	3	379	Adjusted alignment	Urgent Repair
677	2024-09-23 11:55:34	227	2	134	Lubricated moving parts	Inspection
472	2025-02-06 07:01:27	248	1	152	Found worn cable	Inspection
675	2024-12-16 12:44:10	1309	1	262	Minor fix only	Urgent Repair
710	2024-06-06 06:23:55	109	1	33	Performed routine checkup	Maintenance
702	2024-12-31 04:34:14	703	7	376	Upgraded firmware	Inspection
751	2025-01-30 22:37:21	563	2	188	Replaced faulty part	Inspection
491	2024-06-20 01:08:35	1212	7	282	Adjusted alignment	Replacement
\.


--
-- TOC entry 3437 (class 0 OID 16647)
-- Dependencies: 218
-- Data for Name: zone; Type: TABLE DATA; Schema: public; Owner: maoz3242
--

COPY public.zone (zoneid, gymid, zonetype, onlyformembers, isaccessible) FROM stdin;
10	214	soccer field	t	t
2	139	main entry	f	f
5	250	basketball court	t	t
5	186	jacuzzi	t	t
4	284	yoga area	f	t
8	310	boxing area	f	t
8	105	basketball court	f	t
8	194	stretching area	t	t
3	67	sauna	t	t
4	12	volleyball court	t	t
3	212	track	t	t
1	105	volleyball court	f	t
3	104	swimming area	f	t
5	263	rest area	f	t
10	308	rest area	f	t
2	397	physical therapy area	f	f
3	251	soccer field	f	f
9	61	volleyball court	t	t
2	122	volleyball court	f	t
1	76	cardio area	f	t
5	288	volleyball court	f	t
8	64	yoga area	f	t
2	209	yoga area	f	t
1	176	locker room	f	t
6	288	group fitness studio	t	f
10	346	weightlifting area	t	f
5	364	personal training area	f	f
10	391	sauna	t	t
2	90	yoga area	t	t
8	394	basketball court	f	t
6	32	locker room	t	t
5	120	childcare area	f	t
3	282	track	f	t
4	292	main entry	t	t
3	248	boxing area	t	t
8	5	swimming area	f	f
5	44	personal training area	f	t
7	98	climbing wall	t	t
5	340	weightlifting area	f	t
9	125	stretching area	t	f
1	242	stretching area	f	t
6	10	indoor cycling area	t	t
8	178	cardio area	f	t
9	177	swimming area	t	t
1	33	main entry	f	f
6	397	indoor cycling area	f	t
7	144	main entry	t	f
6	214	sauna	f	f
1	239	volleyball court	t	f
3	35	jacuzzi	f	t
6	384	rest area	f	t
10	166	personal training area	t	f
6	48	boxing area	f	t
5	327	jacuzzi	t	t
6	158	locker room	t	t
2	32	indoor cycling area	t	t
2	284	rest area	t	t
5	379	climbing wall	t	t
10	118	climbing wall	t	t
1	19	childcare area	t	f
5	392	physical therapy area	f	t
6	279	indoor cycling area	t	t
3	211	rest area	t	t
1	212	main entry	t	t
1	158	rest area	t	t
8	248	main entry	t	t
3	170	basketball court	f	f
8	32	sauna	f	t
2	56	climbing wall	f	t
2	51	group fitness studio	t	t
3	61	group fitness studio	f	f
4	151	locker room	f	t
2	280	personal training area	t	f
8	321	rest area	t	t
6	112	soccer field	t	t
8	169	basketball court	t	t
7	274	track	f	t
5	371	personal training area	f	f
3	60	swimming area	t	t
4	49	basketball court	t	t
2	107	personal training area	f	t
7	262	climbing wall	f	t
4	62	cardio area	f	f
10	50	weightlifting area	t	t
1	289	childcare area	t	t
5	353	cardio area	t	t
5	215	weightlifting area	t	t
5	224	track	t	t
2	290	basketball court	t	t
9	306	volleyball court	f	t
2	134	stretching area	t	t
7	316	track	t	t
3	143	soccer field	t	t
8	195	jacuzzi	t	f
10	299	basketball court	t	t
5	15	boxing area	t	f
10	246	basketball court	f	f
2	326	rest area	t	t
1	152	locker room	f	t
1	257	locker room	f	f
7	165	swimming area	f	t
4	177	climbing wall	t	f
9	202	basketball court	f	t
8	308	boxing area	f	f
1	52	group fitness studio	t	t
3	253	personal training area	t	f
3	17	track	t	f
8	324	indoor cycling area	f	t
2	244	climbing wall	t	t
2	14	soccer field	t	t
9	291	group fitness studio	f	f
8	350	soccer field	t	t
3	246	track	t	t
1	16	boxing area	t	f
6	309	rest area	f	t
8	184	jacuzzi	f	t
5	301	volleyball court	t	f
5	328	main entry	f	t
10	254	jacuzzi	t	t
9	209	climbing wall	f	t
2	353	climbing wall	t	t
5	192	jacuzzi	f	t
6	352	childcare area	f	t
5	339	volleyball court	t	t
6	155	volleyball court	t	t
3	42	main entry	f	f
1	332	track	t	t
8	313	main entry	t	t
8	386	sauna	f	t
7	346	group fitness studio	f	t
5	279	jacuzzi	t	t
7	92	personal training area	f	t
5	229	locker room	t	t
6	1	soccer field	f	t
6	311	jacuzzi	t	t
8	380	weightlifting area	t	t
5	35	stretching area	f	f
5	299	weightlifting area	f	t
7	370	climbing wall	f	t
4	58	rest area	f	t
6	297	group fitness studio	f	t
3	161	jacuzzi	f	t
6	63	stretching area	t	t
5	398	basketball court	t	t
6	76	boxing area	t	t
1	14	cardio area	t	t
9	39	boxing area	t	t
7	293	main entry	t	t
5	196	jacuzzi	t	t
5	214	yoga area	f	t
8	318	childcare area	t	t
8	280	jacuzzi	t	t
1	45	track	t	t
5	173	swimming area	f	t
8	82	boxing area	f	t
10	324	indoor cycling area	t	t
6	340	group fitness studio	t	t
5	90	group fitness studio	f	t
4	93	indoor cycling area	t	t
9	90	boxing area	f	t
2	361	boxing area	f	t
2	39	stretching area	t	t
3	389	cardio area	f	f
2	25	volleyball court	f	t
8	6	locker room	t	t
3	287	weightlifting area	f	t
5	95	jacuzzi	t	t
7	140	soccer field	f	t
10	208	weightlifting area	f	f
6	379	locker room	f	t
7	231	jacuzzi	f	t
2	393	climbing wall	t	t
10	329	cardio area	f	t
7	278	locker room	t	f
10	5	locker room	t	t
4	288	personal training area	t	f
3	357	cardio area	f	t
3	171	sauna	f	t
7	347	locker room	t	t
1	160	physical therapy area	t	t
7	221	boxing area	t	t
8	375	boxing area	f	t
1	229	climbing wall	f	f
2	48	basketball court	f	t
9	60	main entry	f	t
6	208	swimming area	f	t
5	189	indoor cycling area	t	t
5	360	indoor cycling area	t	t
10	52	boxing area	f	f
7	196	jacuzzi	f	f
5	144	climbing wall	f	t
4	163	yoga area	f	t
7	105	boxing area	f	t
5	55	group fitness studio	f	f
3	157	locker room	f	t
4	146	personal training area	t	t
4	101	stretching area	t	t
3	102	swimming area	t	f
3	206	track	t	t
10	70	group fitness studio	f	t
2	83	group fitness studio	f	t
10	16	swimming area	f	t
5	68	childcare area	t	t
10	355	boxing area	t	t
3	226	locker room	t	t
6	33	volleyball court	t	t
6	78	soccer field	t	t
6	363	group fitness studio	f	t
8	127	personal training area	t	t
7	186	childcare area	t	t
8	97	basketball court	f	t
8	155	climbing wall	t	t
8	378	personal training area	t	t
10	222	swimming area	f	t
5	312	indoor cycling area	f	t
3	75	rest area	f	t
9	184	yoga area	f	f
10	385	sauna	t	t
5	167	personal training area	t	t
7	198	cardio area	f	t
1	104	personal training area	t	f
8	81	boxing area	f	t
2	34	personal training area	f	t
8	148	rest area	t	t
4	338	climbing wall	t	t
10	150	physical therapy area	f	t
7	286	cardio area	f	t
2	188	yoga area	t	f
7	43	physical therapy area	t	t
2	171	personal training area	f	t
6	163	track	f	t
1	270	basketball court	f	t
7	213	soccer field	t	t
7	312	stretching area	t	t
9	41	sauna	t	t
2	338	weightlifting area	f	t
3	384	sauna	t	t
10	312	jacuzzi	f	t
1	324	basketball court	f	f
3	242	indoor cycling area	f	f
5	124	physical therapy area	f	t
1	197	jacuzzi	f	t
8	305	physical therapy area	f	t
2	204	childcare area	f	f
5	387	cardio area	f	t
7	325	physical therapy area	t	t
5	41	cardio area	f	t
1	228	volleyball court	f	t
9	156	soccer field	t	t
9	334	locker room	f	t
10	27	basketball court	t	t
8	102	childcare area	f	t
5	254	group fitness studio	f	t
3	298	locker room	f	t
9	240	swimming area	t	t
8	228	swimming area	f	t
9	66	personal training area	t	t
4	259	weightlifting area	t	t
1	210	sauna	t	t
8	297	weightlifting area	f	t
6	393	climbing wall	t	t
3	272	swimming area	f	t
9	72	weightlifting area	f	t
2	132	stretching area	t	t
8	157	volleyball court	t	t
4	376	volleyball court	t	t
10	149	indoor cycling area	t	t
8	271	jacuzzi	f	t
8	187	soccer field	f	t
8	366	jacuzzi	t	t
2	232	physical therapy area	t	t
3	24	basketball court	t	t
6	202	soccer field	f	f
10	321	locker room	t	f
4	238	jacuzzi	t	t
4	170	indoor cycling area	f	f
3	221	boxing area	f	t
7	216	yoga area	f	t
8	38	climbing wall	f	t
2	168	swimming area	t	t
5	253	track	t	t
7	26	locker room	f	t
7	376	rest area	t	t
1	29	stretching area	t	t
10	388	jacuzzi	f	t
1	224	sauna	t	t
4	339	boxing area	t	t
1	7	track	t	t
6	350	sauna	t	f
5	266	swimming area	t	t
2	314	weightlifting area	t	t
5	34	childcare area	t	t
5	148	cardio area	t	t
4	53	boxing area	f	t
1	235	sauna	t	t
7	1	personal training area	f	t
10	392	swimming area	t	f
5	100	boxing area	f	t
1	334	stretching area	f	t
5	105	swimming area	f	t
1	128	weightlifting area	t	t
3	33	sauna	f	t
7	171	stretching area	f	t
8	238	boxing area	t	t
1	251	physical therapy area	t	t
10	247	group fitness studio	t	t
8	287	volleyball court	f	t
6	55	sauna	t	t
1	203	group fitness studio	t	t
9	62	physical therapy area	t	t
2	321	climbing wall	t	t
6	129	childcare area	t	t
6	300	rest area	t	t
9	119	indoor cycling area	t	t
3	148	jacuzzi	t	t
6	113	track	f	t
5	86	climbing wall	t	f
2	387	yoga area	t	t
2	163	childcare area	f	t
1	139	rest area	f	t
6	5	sauna	f	t
2	377	weightlifting area	t	t
7	375	sauna	t	t
4	188	childcare area	f	t
10	240	stretching area	t	t
7	86	climbing wall	t	t
3	119	soccer field	t	t
4	137	group fitness studio	t	t
8	328	boxing area	f	t
8	78	group fitness studio	f	t
10	60	jacuzzi	t	t
6	109	locker room	f	t
4	399	boxing area	t	t
8	30	indoor cycling area	t	f
3	192	main entry	f	f
10	111	personal training area	f	f
9	327	indoor cycling area	f	f
8	322	stretching area	t	t
6	27	climbing wall	f	f
10	41	weightlifting area	f	f
7	19	basketball court	f	f
3	257	jacuzzi	t	t
9	203	group fitness studio	f	f
10	395	stretching area	f	f
1	2	soccer field	f	f
2	54	track	f	t
2	206	rest area	t	t
9	188	weightlifting area	f	t
3	178	cardio area	f	t
7	109	physical therapy area	f	t
8	283	rest area	f	t
6	387	swimming area	f	f
9	48	volleyball court	t	t
6	115	basketball court	t	t
4	257	group fitness studio	f	t
1	71	locker room	f	t
7	12	stretching area	t	t
10	101	main entry	f	t
5	212	rest area	t	t
3	364	jacuzzi	f	t
10	204	childcare area	f	t
7	258	weightlifting area	f	t
7	96	boxing area	f	t
8	62	yoga area	f	t
5	32	jacuzzi	f	f
1	307	soccer field	t	t
2	239	swimming area	f	t
1	79	main entry	f	t
10	143	weightlifting area	t	f
10	191	rest area	t	t
7	371	climbing wall	t	t
9	37	weightlifting area	f	t
1	24	group fitness studio	t	t
7	77	physical therapy area	f	f
7	330	basketball court	f	t
6	203	soccer field	t	f
8	204	yoga area	t	t
9	117	sauna	f	t
5	239	indoor cycling area	t	t
7	64	locker room	t	t
9	243	basketball court	t	t
1	170	weightlifting area	t	t
4	184	cardio area	t	t
3	386	rest area	f	f
10	316	weightlifting area	f	t
5	391	rest area	f	t
10	359	soccer field	f	t
2	271	weightlifting area	t	f
7	351	personal training area	t	t
4	82	rest area	f	f
5	28	locker room	t	t
3	398	indoor cycling area	t	t
7	378	group fitness studio	f	f
8	72	cardio area	t	t
7	85	volleyball court	f	t
4	2	track	t	t
5	295	sauna	f	f
10	54	weightlifting area	f	f
10	100	locker room	f	t
9	79	basketball court	f	t
9	264	cardio area	t	t
1	320	group fitness studio	f	t
6	383	climbing wall	t	t
4	320	main entry	t	f
3	238	jacuzzi	t	t
9	266	main entry	t	f
8	301	main entry	t	f
6	378	jacuzzi	t	t
10	315	indoor cycling area	t	t
4	375	track	f	t
10	374	rest area	f	t
6	21	physical therapy area	t	t
1	150	sauna	t	f
10	37	basketball court	t	t
5	61	volleyball court	f	f
5	165	rest area	f	t
7	366	swimming area	t	t
6	271	track	f	t
8	36	yoga area	t	f
7	327	rest area	t	t
10	131	stretching area	f	t
9	299	group fitness studio	t	t
1	216	climbing wall	t	t
1	49	weightlifting area	t	f
3	379	stretching area	f	f
1	178	indoor cycling area	f	t
3	177	boxing area	t	t
9	276	childcare area	t	f
9	122	locker room	f	t
5	374	main entry	f	f
8	213	childcare area	t	t
10	218	physical therapy area	f	t
5	331	sauna	f	t
6	272	basketball court	t	f
9	170	volleyball court	t	t
6	264	basketball court	f	t
4	255	sauna	f	t
1	70	basketball court	t	t
4	237	group fitness studio	f	t
6	187	main entry	f	t
7	120	physical therapy area	t	t
3	37	rest area	t	t
9	241	physical therapy area	f	t
6	143	physical therapy area	t	t
4	86	track	f	t
9	357	boxing area	t	f
7	51	basketball court	t	t
4	234	rest area	t	t
7	256	cardio area	t	t
8	115	boxing area	t	t
2	320	indoor cycling area	t	t
9	196	sauna	f	t
2	317	volleyball court	t	t
6	26	volleyball court	f	t
3	215	track	t	t
5	396	soccer field	f	t
9	263	physical therapy area	t	f
10	356	indoor cycling area	t	f
8	125	yoga area	f	t
7	368	stretching area	f	f
9	372	cardio area	f	t
9	189	basketball court	t	t
8	140	yoga area	f	t
6	277	physical therapy area	f	t
10	4	indoor cycling area	f	t
6	330	volleyball court	f	f
8	51	personal training area	t	t
2	101	group fitness studio	f	t
8	67	climbing wall	f	t
4	135	climbing wall	t	t
5	373	personal training area	t	f
7	391	sauna	t	t
3	269	main entry	t	t
1	264	climbing wall	t	t
8	229	childcare area	t	t
5	102	yoga area	t	t
2	230	boxing area	t	t
4	4	physical therapy area	f	t
8	388	climbing wall	t	f
4	99	locker room	t	t
2	178	cardio area	t	t
2	186	yoga area	t	t
9	109	physical therapy area	t	t
9	399	stretching area	t	t
10	202	soccer field	f	t
2	185	physical therapy area	f	f
2	389	rest area	f	f
9	116	jacuzzi	f	f
10	309	physical therapy area	t	t
7	159	weightlifting area	f	t
7	282	physical therapy area	f	t
3	136	weightlifting area	f	t
5	47	basketball court	t	t
7	100	personal training area	t	t
6	189	physical therapy area	t	f
6	335	indoor cycling area	t	t
5	304	rest area	t	t
3	315	track	f	t
1	166	basketball court	t	t
10	347	childcare area	f	t
10	32	weightlifting area	t	f
7	215	climbing wall	t	t
3	98	swimming area	t	t
1	243	locker room	t	f
9	10	track	f	t
6	373	boxing area	t	t
8	382	basketball court	t	t
8	23	locker room	t	t
3	354	weightlifting area	t	t
7	182	main entry	t	t
6	178	basketball court	f	t
1	384	boxing area	f	t
7	265	physical therapy area	f	t
7	80	climbing wall	f	t
5	164	basketball court	t	t
10	368	sauna	t	t
3	139	sauna	t	t
9	284	weightlifting area	f	f
1	147	basketball court	t	f
7	399	childcare area	t	t
5	394	locker room	t	f
5	381	basketball court	f	t
1	175	indoor cycling area	t	t
6	240	volleyball court	t	t
4	168	track	f	t
2	87	indoor cycling area	t	f
7	41	locker room	f	t
4	14	sauna	f	f
1	262	weightlifting area	t	t
10	255	volleyball court	f	f
10	373	physical therapy area	t	f
6	153	rest area	f	t
8	384	jacuzzi	f	t
8	193	stretching area	t	f
3	142	basketball court	t	t
7	382	personal training area	t	f
6	348	rest area	f	t
9	175	main entry	f	t
2	93	track	t	t
8	398	group fitness studio	f	t
2	6	soccer field	f	t
3	337	jacuzzi	t	t
10	12	weightlifting area	t	t
7	329	sauna	t	f
8	367	climbing wall	f	t
4	309	locker room	f	t
9	28	cardio area	f	t
1	156	basketball court	f	t
6	381	indoor cycling area	t	t
4	187	climbing wall	t	t
8	347	boxing area	t	t
4	223	swimming area	t	t
4	321	sauna	t	t
9	262	personal training area	t	t
6	23	soccer field	t	t
4	148	yoga area	t	t
1	256	indoor cycling area	t	f
7	279	main entry	t	t
4	262	swimming area	t	t
10	122	group fitness studio	t	t
7	289	boxing area	f	t
3	376	boxing area	f	t
4	279	main entry	f	t
1	249	personal training area	t	f
7	247	swimming area	f	f
8	358	volleyball court	t	t
5	136	boxing area	f	t
8	92	climbing wall	t	t
9	224	group fitness studio	f	f
8	377	weightlifting area	f	f
3	155	sauna	f	t
3	399	basketball court	f	t
6	184	weightlifting area	f	t
1	95	basketball court	f	t
6	389	main entry	t	t
4	29	boxing area	t	t
5	343	track	t	t
4	169	soccer field	f	t
4	149	volleyball court	t	t
7	44	yoga area	t	f
5	146	childcare area	f	t
1	184	personal training area	f	t
2	108	weightlifting area	f	t
7	52	volleyball court	t	t
3	43	basketball court	f	t
8	189	weightlifting area	f	t
7	336	group fitness studio	f	t
2	159	rest area	f	f
6	285	rest area	t	t
2	216	group fitness studio	t	t
9	77	group fitness studio	t	t
6	176	weightlifting area	f	t
3	328	indoor cycling area	f	t
6	341	main entry	t	t
10	174	basketball court	t	t
8	24	personal training area	t	t
2	354	personal training area	t	t
10	68	personal training area	t	t
4	123	group fitness studio	t	t
1	10	group fitness studio	t	t
\.


--
-- TOC entry 3263 (class 2606 OID 16663)
-- Name: accessdevice accessdevice_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.accessdevice
    ADD CONSTRAINT accessdevice_pkey PRIMARY KEY (deviceid, zoneid, gymid);


--
-- TOC entry 3281 (class 2606 OID 16769)
-- Name: entryrecord entryrecord_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.entryrecord
    ADD CONSTRAINT entryrecord_pkey PRIMARY KEY (personid, deviceid, zoneid, gymid, entrytime);


--
-- TOC entry 3269 (class 2606 OID 16715)
-- Name: exitrecord exitrecord_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.exitrecord
    ADD CONSTRAINT exitrecord_pkey PRIMARY KEY (personid, deviceid, zoneid, gymid, exittime);


--
-- TOC entry 3279 (class 2606 OID 16757)
-- Name: gym gym_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.gym
    ADD CONSTRAINT gym_pkey PRIMARY KEY (gymid);


--
-- TOC entry 3267 (class 2606 OID 16686)
-- Name: maintenanceworker maintenanceworker_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.maintenanceworker
    ADD CONSTRAINT maintenanceworker_pkey PRIMARY KEY (personid);


--
-- TOC entry 3265 (class 2606 OID 16675)
-- Name: member member_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_pkey PRIMARY KEY (personid);


--
-- TOC entry 3259 (class 2606 OID 16639)
-- Name: person person_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (personid);


--
-- TOC entry 3277 (class 2606 OID 16733)
-- Name: repair repair_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.repair
    ADD CONSTRAINT repair_pkey PRIMARY KEY (personid, date, deviceid, zoneid, gymid);


--
-- TOC entry 3261 (class 2606 OID 16653)
-- Name: zone zone_pkey; Type: CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.zone
    ADD CONSTRAINT zone_pkey PRIMARY KEY (zoneid, gymid);


--
-- TOC entry 3270 (class 1259 OID 16748)
-- Name: idx_exit_device; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_exit_device ON public.exitrecord USING btree (deviceid, zoneid, gymid);


--
-- TOC entry 3271 (class 1259 OID 16747)
-- Name: idx_exit_person; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_exit_person ON public.exitrecord USING btree (personid);


--
-- TOC entry 3272 (class 1259 OID 16749)
-- Name: idx_exit_time; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_exit_time ON public.exitrecord USING btree (exittime);


--
-- TOC entry 3273 (class 1259 OID 16752)
-- Name: idx_repair_date; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_repair_date ON public.repair USING btree (date);


--
-- TOC entry 3274 (class 1259 OID 16751)
-- Name: idx_repair_device; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_repair_device ON public.repair USING btree (deviceid, zoneid, gymid);


--
-- TOC entry 3275 (class 1259 OID 16750)
-- Name: idx_repair_person; Type: INDEX; Schema: public; Owner: maoz3242
--

CREATE INDEX idx_repair_person ON public.repair USING btree (personid);


--
-- TOC entry 3282 (class 2606 OID 16664)
-- Name: accessdevice accessdevice_zoneid_gymid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.accessdevice
    ADD CONSTRAINT accessdevice_zoneid_gymid_fkey FOREIGN KEY (zoneid, gymid) REFERENCES public.zone(zoneid, gymid) ON DELETE CASCADE;


--
-- TOC entry 3289 (class 2606 OID 16775)
-- Name: entryrecord entryrecord_deviceid_zoneid_gymid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.entryrecord
    ADD CONSTRAINT entryrecord_deviceid_zoneid_gymid_fkey FOREIGN KEY (deviceid, zoneid, gymid) REFERENCES public.accessdevice(deviceid, zoneid, gymid);


--
-- TOC entry 3290 (class 2606 OID 16770)
-- Name: entryrecord entryrecord_personid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.entryrecord
    ADD CONSTRAINT entryrecord_personid_fkey FOREIGN KEY (personid) REFERENCES public.person(personid);


--
-- TOC entry 3285 (class 2606 OID 16721)
-- Name: exitrecord exitrecord_deviceid_zoneid_gymid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.exitrecord
    ADD CONSTRAINT exitrecord_deviceid_zoneid_gymid_fkey FOREIGN KEY (deviceid, zoneid, gymid) REFERENCES public.accessdevice(deviceid, zoneid, gymid);


--
-- TOC entry 3286 (class 2606 OID 16716)
-- Name: exitrecord exitrecord_personid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.exitrecord
    ADD CONSTRAINT exitrecord_personid_fkey FOREIGN KEY (personid) REFERENCES public.person(personid);


--
-- TOC entry 3284 (class 2606 OID 16687)
-- Name: maintenanceworker maintenanceworker_personid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.maintenanceworker
    ADD CONSTRAINT maintenanceworker_personid_fkey FOREIGN KEY (personid) REFERENCES public.person(personid) ON DELETE CASCADE;


--
-- TOC entry 3283 (class 2606 OID 16676)
-- Name: member member_personid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.member
    ADD CONSTRAINT member_personid_fkey FOREIGN KEY (personid) REFERENCES public.person(personid) ON DELETE CASCADE;


--
-- TOC entry 3287 (class 2606 OID 16739)
-- Name: repair repair_deviceid_zoneid_gymid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.repair
    ADD CONSTRAINT repair_deviceid_zoneid_gymid_fkey FOREIGN KEY (deviceid, zoneid, gymid) REFERENCES public.accessdevice(deviceid, zoneid, gymid);


--
-- TOC entry 3288 (class 2606 OID 16734)
-- Name: repair repair_personid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: maoz3242
--

ALTER TABLE ONLY public.repair
    ADD CONSTRAINT repair_personid_fkey FOREIGN KEY (personid) REFERENCES public.maintenanceworker(personid);


-- Completed on 2025-05-04 15:29:08 UTC

--
-- PostgreSQL database dump complete
--


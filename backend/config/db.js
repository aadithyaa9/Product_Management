import dotenv from 'dotenv';
import express from 'express';
import { neon } from '@neondatabase/serverless';

dotenv.config();

const { PUSER, PPASSWORD, PHOST, PDATABASE } = process.env;

const psql = neon(
  `postgres://${PUSER}:${PPASSWORD}@${PHOST}/${PDATABASE}?sslmode=require&channel_binding=require`
);

export { psql };
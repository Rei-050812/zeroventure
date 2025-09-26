import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'zeroventure',
  title: 'ZEROVENTURE',

  projectId: 'xgwvet7h',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
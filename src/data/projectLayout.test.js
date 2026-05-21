import test from 'node:test'
import assert from 'node:assert/strict'

const projectLayoutModule = await import('./projectLayout.js').catch(() => ({}))
const { packProjectRows } = projectLayoutModule

test('packProjectRows preserves order while filling rows exactly', () => {
  assert.equal(typeof packProjectRows, 'function')

  const projects = [
    { title: 'A', layout: 'featured' },
    { title: 'B', layout: 'featured' },
    { title: 'C', layout: 'standard' },
    { title: 'D', layout: 'standard' },
    { title: 'E', layout: 'standard' },
    { title: 'F', layout: 'standard' },
    { title: 'G', layout: 'standard' },
    { title: 'H', layout: 'standard' }
  ]

  const rows = packProjectRows(projects)

  assert.deepEqual(
    rows.map((row) => row.map((item) => item.project.title)),
    [['A', 'B'], ['C', 'D', 'E'], ['F', 'G', 'H']]
  )

  assert.deepEqual(
    rows.map((row) => row.reduce((total, item) => total + item.span, 0)),
    [12, 12, 12]
  )
})

test('packProjectRows expands the last project to avoid trailing gaps', () => {
  assert.equal(typeof packProjectRows, 'function')

  const rows = packProjectRows([
    { title: 'Solo', layout: 'standard' }
  ])

  assert.equal(rows.length, 1)
  assert.equal(rows[0][0].project.title, 'Solo')
  assert.equal(rows[0][0].span, 12)
})
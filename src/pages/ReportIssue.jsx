import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import FormField, { Select, TextArea, TextInput } from '../components/FormField'
import { useAppData } from '../hooks/useAppData'
import { CATEGORIES, LOCATIONS } from '../data/mockData'
import { validateReportForm } from '../utils/reports'

const EMPTY = {
  title: '',
  description: '',
  category: '',
  location: '',
}

export default function ReportIssue() {
  const { addReport } = useAppData()
  const navigate = useNavigate()
  const [values, setValues] = useState(EMPTY)
  const [imageFile, setImageFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function updateField(field) {
    return (event) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function onImageChange(event) {
    const file = event.target.files?.[0] || null
    setImageFile(file)
    setErrors((current) => ({ ...current, image: undefined }))
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validateReportForm({ ...values, imageFile })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    const created = addReport({
      ...values,
      imageName: imageFile ? imageFile.name : null,
    })
    navigate(`/reports/${created.id}`, { state: { justSubmitted: true } })
  }

  return (
    <div className="page page-narrow">
      <header className="page-hero">
        <div>
          <p className="eyebrow">New work order</p>
          <h1>Report a campus issue</h1>
          <p className="lede">
            Be specific. “Lights out, Block B, second-floor corridor” is more useful than “electricity
            problem”.
          </p>
        </div>
      </header>

      <Card as="div">
        <form className="issue-form" onSubmit={onSubmit} noValidate>
          <FormField
            id="title"
            label="Title"
            error={errors.title}
            hint="A sentence staff can scan in a list."
          >
            <TextInput
              id="title"
              value={values.title}
              onChange={updateField('title')}
              placeholder="e.g. Leak under the west washroom tap"
            />
          </FormField>

          <FormField
            id="description"
            label="Description"
            error={errors.description}
            hint="What is happening, since when, and who it affects."
          >
            <TextArea
              id="description"
              value={values.description}
              onChange={updateField('description')}
              placeholder="Include floor, room, time of day, and anything already tried."
            />
          </FormField>

          <div className="form-row">
            <FormField id="category" label="Category" error={errors.category}>
              <Select id="category" value={values.category} onChange={updateField('category')}>
                <option value="">Select category</option>
                {CATEGORIES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormField>

            <FormField id="location" label="Location" error={errors.location}>
              <Select id="location" value={values.location} onChange={updateField('location')}>
                <option value="">Select location</option>
                {LOCATIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormField>
          </div>

          <FormField
            id="image"
            label="Photo (optional)"
            error={errors.image}
            hint="JPG or PNG, up to 5 MB. Stored locally until Firebase is connected."
          >
            <input
              id="image"
              className="field-control field-file"
              type="file"
              accept="image/*"
              onChange={onImageChange}
            />
            {imageFile ? <p className="file-name">{imageFile.name}</p> : null}
          </FormField>

          <div className="form-actions">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit report'}
            </Button>
            <Button to="/reports" variant="ghost">
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

const activityFields = [
  {
    name: 'day',
    placeholder: 'Monday',
    required: true
  },
  {
    name: 'type',
    placeholder: 'Gym',
    required: true
  },
  {
    name: 'hour',
    placeholder: '9:00am',
    required: true
  },
  {
    name: 'description',
    placeholder: 'Arms and Back',
    required: true
  }
]
const objectiveFields = [
  {
    name: 'objective',
    placeholder: 'Read more',
    required: true
  }
]
const editActivityFields = [
  {
    name: 'day',
    placeholder: 'Monday'
  },
  {
    name: 'type',
    placeholder: 'Gym'
  },
  {
    name: 'hour',
    placeholder: '9:00am'
  },
  {
    name: 'description',
    placeholder: 'Arms and Back',
    deleteButton: true
  }
]
const editObjectiveFields = [
  {
    name: 'objective',
    placeholder: 'Read more',
    deleteButton: true
  }
]

export { activityFields, objectiveFields, editActivityFields, editObjectiveFields }

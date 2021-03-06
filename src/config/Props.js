const placeProps = {
  route: 'places',
  itemId: 'place_id',
  divideList: [],
  nonEditList: ['place_id', 'created_at', 'updated_at', 'select', 'isEditing'],
  postModel: {
    place_name: 'string',
    place_address: 'string',
    place_contact_person: 'string',
    place_phone: 'string'
  }
}

const lampProps = {
  route: 'lamps',
  itemId: 'lamp_id',
  divideList: ['lamp_location'],
  nonEditList: [
    'lamp_id',
    'lamp_hash_id',
    'created_at',
    'updated_at',
    'select',
    'isEditing'
  ],
  postModel: {
    lamp_id: 'string',
    lamp_location: {
      subLabels: ['lamp_longitude', 'lamp_latitude'],
      type: 'number'
    },
    lamp_deployed_date: 'date',
    lamp_wifi_ssid: 'string',
    lamp_wifi_password: 'string',
    place_id: 'number'
  }
}

const mccProps = {
  route: 'mcc',
  itemId: 'mcc_id',
  divideList: [],
  nonEditList: [
    'mcc_id',
    'mcc_keys',
    'mcc_points',
    'mcc_center',
    'rule_id',
    'created_at',
    'updated_at',
    'select',
    'isEditing'
  ],
  postModel: {
    mcc_center: 'string'
  }
}

const stateProps = {
  route: 'states',
  itemId: 'state_id',
  divideList: [],
  nonEditList: ['state_id', 'created_at', 'updated_at', 'select', 'isEditing'],
  postModel: {
    lamp_id: 'string',
    lamp_state: 'number',
    lamp_check_date: 'date',
    lamp_check_person: 'string',
    state_description: 'string',
    state_reason: 'string'
  }
}

const ruleProps = {
  route: 'rules',
  itemId: 'rule_id',
  divideList: [],
  nonEditList: ['rule_id', 'created_at', 'updated_at', 'select', 'isEditing'],
  postModel: {
    timeline_upper_limit: 'number',
    distance_lower_limit: 'number',
    points_lower_limit: 'number',
    counts_lower_limit: 'number'
  }
}

const commentProps = {
  route: 'comments',
  itemId: 'comment_id',
  divideList: [],
  nonEditList: ['comment_id', 'lamp_id', 'comment_content', 'created_at', 'select', 'isEditing'],
  postModel: {
    lamp_id: 'string',
    comment_content: 'string'
  }
}

const Props = {
  Places: placeProps,
  Lamps: lampProps,
  Mccs: mccProps,
  States: stateProps,
  Rules: ruleProps,
  Comments: commentProps
}

export default Props

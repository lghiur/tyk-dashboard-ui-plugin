import React, {useEffect} from 'react';
import { Formik, Field } from 'formik';

import {
  FormikInput,
  Panel,
  Row,
  Column
} from '@tyk-technologies/tyk-ui';

export const Component1 = ({
  apiDefinition,
  validate,
  errors,
  saveValuesInApiDef,
}) => {

  useEffect(() => {
    console.log('inside useEffect');
  });

  const onChange = (fieldName, formValues, value) => {
    const tempValues = { ...formValues };
    tempValues[fieldName] = value;
    saveValuesInApiDef(tempValues);
  };
  return (
    // <>My own plugins</>
    <Row>
      <Column size="offset-md-2 offset-lg-2 md-8 lg-8">
        <Panel
          theme="blank"
        >
          <Panel.Header>
            My own custom plugin
          </Panel.Header>
          <Panel.Body>
            <Formik
              enableReinitialize
              initialValues={{
                baz: 'baz',
                foo: 'foo'
              }}
            >
              {({
                values,
              }) => (
                apiDefinition.designer.coreSettings.apiSettings.internal
                  ? (
                    <Field
                      component={FormikInput}
                      label="Baz"
                      name="baz"
                      theme="default rounded-corners"
                      onChange={onChange.bind(null, 'baz', values)}
                      error={errors?.baz}
                    />
                  )
                  : (
                    <Field
                      component={FormikInput}
                      label="Foo"
                      name="foo"
                      theme="default rounded-corners"
                      onChange={onChange.bind(null, 'foo', values)}
                      note="For seeing baz activate internal"
                      error={errors?.foo}
                    />
                  )
              )}
            </Formik>
          </Panel.Body>
        </Panel>
      </Column>
    </Row>
  );
};

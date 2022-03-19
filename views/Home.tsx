import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-elements';

import useTestEmail from '../hooks/useTestEmail';

import { EMAIL_REGEX, GdCSuffix, GmailSuffix } from '../helpers/constants';

import Card from '../components/molecules/Card';
import Form from '../components/molecules/Form';
import Heading from '../components/atoms/Heading';

type TestResult = { email: string; emailExists: boolean };

const Home: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [inputError, setInputError] = useState<string>('');
  const [buttonClick, setButtonClick] = useState<1 | 2>();
  const [results, setResults] = useState<Array<TestResult>>([]);
  const { data, isLoading, error, loadData } = useTestEmail();

  const { theme } = useTheme();

  useEffect(() => {
    if (data && !results.find((result: TestResult) => result.email === email)) {
      setResults(prevState => [
        ...prevState,
        { email, emailExists: data.emailExists },
      ]);
    }
  }, [data]);

  const onSubmit = () => {
    if (
      email &&
      EMAIL_REGEX.test(email) &&
      (email.includes(GmailSuffix) || email.includes(GdCSuffix))
    ) {
      loadData(email);
    } else {
      setInputError('You should enter a non-empty and valid email.');
    }
  };

  const onDelete = (email: string) => {
    setResults(prevState =>
      prevState.filter((result: TestResult) => result.email !== email),
    );
  };

  return (
    <ScrollView
      style={styles.mainView}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.formSection}>
        <Heading>Enter your email address</Heading>
        <Form
          inputSuffix={GmailSuffix}
          inputPlaceholder="john.doe"
          onChange={(value: string) => {
            setEmail(value.trim().toLowerCase() + GmailSuffix);
            setInputError('');
          }}
          onSubmit={() => {
            onSubmit();
            setButtonClick(1);
          }}
          loading={
            email.includes(GmailSuffix) && buttonClick === 1 && isLoading
          }
        />
        <Divider style={styles.divider} color={theme.colors?.grey5} />
        <Form
          inputSuffix={GdCSuffix}
          inputPlaceholder="john.doe"
          onChange={(value: string) => {
            setEmail(value.trim().toLowerCase() + GdCSuffix);
            setInputError('');
          }}
          onSubmit={() => {
            onSubmit();
            setButtonClick(2);
          }}
          loading={email.includes(GdCSuffix) && buttonClick === 2 && isLoading}
        />
        <Text style={{ color: theme.colors?.error, ...styles.inputError }}>
          {inputError || error}
        </Text>
      </View>
      <View
        style={{
          ...styles.resultsSection,
          backgroundColor: theme.colors?.grey4,
        }}>
        {!!Object.keys(results).length && (
          <>
            <Heading>Results</Heading>

            {results.map((item: TestResult) => (
              <Card
                key={item.email}
                text={
                  item.emailExists
                    ? `${item.email} is a GDC member.`
                    : `BOOOH we don't know ${item.email}.`
                }
                success={item.emailExists}
                onDelete={() => onDelete(item.email)}
              />
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'stretch',
    flex: 1,
  },
  mainView: {
    display: 'flex',
    backgroundColor: 'white',
  },
  formSection: {
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  resultsSection: {
    paddingHorizontal: 30,
    paddingTop: 24,
    paddingBottom: 50,
    flex: 1,
  },
  divider: {
    marginTop: 32,
    marginBottom: 24,
  },
  inputError: {
    paddingVertical: 25,
  },
});

export default Home;

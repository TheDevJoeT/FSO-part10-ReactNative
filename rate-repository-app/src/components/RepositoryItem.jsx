import { View, StyleSheet, Image } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
  },

  topContainer: {
    flexDirection: 'row',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },

  infoContainer: {
    flex: 1,
    paddingLeft: 15,
  },

  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    marginTop: 5,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },

  statItem: {
    alignItems: 'center',
  },
});

const Stat = ({ label, value }) => {
  return (
    <View style={styles.statItem}>
      <Text fontWeight="bold">{value}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>

        <Image
          style={styles.avatar}
          source={{ uri: item.ownerAvatarUrl }}
        />

        <View style={styles.infoContainer}>

          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>

          <Text color="textSecondary" style={{ marginTop: 5 }}>
            {item.description}
          </Text>

          <View style={styles.languageTag}>
            <Text style={{ color: 'white' }}>
              {item.language}
            </Text>
          </View>

        </View>
      </View>

      <View style={styles.statsContainer}>
        <Stat label="Stars" value={item.stargazersCount} />
        <Stat label="Forks" value={item.forksCount} />
        <Stat label="Reviews" value={item.reviewCount} />
        <Stat label="Rating" value={item.ratingAverage} />
      </View>

    </View>
  );
};

export default RepositoryItem;
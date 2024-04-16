

        {/* delivery area */}
        <View style={[styles.summaryContainer]}>
          <View style={[generalStyles.flexStyles, {
            borderLeftColor: COLORS.primaryGreenHex,
            borderLeftWidth: 5,
            borderStyle: "dotted",
            padding: 5,
            alignItems: "center",
            justifyContent: "space-between"
          }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Pickup Location</Text>
              <Text style={[generalStyles.CardTitle]}>Nansana, Kampala</Text>
              <Text style={[generalStyles.CardSubtitle]}>Delivery Location</Text>
              <Text style={[generalStyles.CardTitle]}>Kawempe Ttula Uganda</Text>

            </View>

            <View style={{ backgroundColor: COLORS.primaryGreenHex, padding: 8, borderRadius: 20 }}>
              <Text style={[generalStyles.CardSubtitle, { color: COLORS.primaryBlackHex }]}>
                {acceptOrder ? "Accepted" : "Pending"}
              </Text>
            </View>
          </View>

          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Receipient</Text>
              <Text style={[generalStyles.CardTitle]}>Bruce Asiimwe</Text>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              style={{ padding: 10 }}
              onPress={() => onMakeCall('0759983853')}
            >
              <Ionicons
                name="call"
                size={18}
                color={COLORS.primaryOrangeHex}
                onPress={() => onMakeCall('0759983853')}
              />
              <Text style={[generalStyles.CardSubtitle]}>Call</Text>
            </TouchableOpacity>
          </View>

          {/* payment details */}
          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between" }]}>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Payment Method</Text>
              <Text style={[generalStyles.CardTitle]}>Cash</Text>
            </View>
            <View>
              <Text style={[generalStyles.CardSubtitle]}>Fee </Text>
              <Text style={[generalStyles.CardTitle]}>UGX 200,000</Text>
            </View>

          </View>
          {/* payment details */}

          {/* items section */}
          <View style={{
            paddingVertical: 5
          }}>
            <View>
              <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={[generalStyles.CardPriceCurrency]}>Total Items :</Text>
                <Text style={[generalStyles.CardSubtitle, { fontWeight: "bold" }]}>{dummyOrders[0]?.items?.length}</Text>
              </View>
              <View>
                {
                  dummyOrders[0]?.items?.map((item: any) => {
                    return (
                      <View key={item?.id} style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: 'center' }]}>
                        <Text style={[generalStyles.CardSubtitle]}>{item?.name}</Text>
                        {/* <Text style={[generalStyles.CardSubtitle]}>{item?.price}</Text> */}
                        <Text style={[generalStyles.CardSubtitle]}>X {item?.quantity} ({formatCurrency(parseInt(item?.price))})</Text>
                        {/* <Text style={[generalStyles.CardSubtitle]}>UGX {item?.total_price}</Text> */}
                      </View>
                    )
                  })
                }
              </View>

            </View>
            <View>

            </View>
          </View>
          {/* items section */}


          <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "center" }]}>
            <TouchableOpacity style={{ marginVertical: 5 }}
              onPress={() => openMapsForDirections()}
            >
              <Text style={[generalStyles.CardTitle, { color: COLORS.primaryOrangeHex, fontWeight: "bold" }]}>View Map Route</Text>
            </TouchableOpacity>
          </View>

          {/* accept and cancel */}
          {
            !acceptOrder && (
              <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-around" }]}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={[generalStyles.loginContainer, { marginTop: 0, padding: 10, width: "40%", backgroundColor: COLORS.primaryRedHex }]}
                >
                  <Text style={generalStyles.loginText}>{'Decline'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={onAcceptOrder}
                  style={[generalStyles.loginContainer, { marginTop: 0, padding: 10, width: "40%", backgroundColor: COLORS.primaryGreenHex }]}
                >
                  <Text style={generalStyles.loginText}>{'Accept'}</Text>
                </TouchableOpacity>

              </View>
            )
          }

          {/* accept and cancel */}

          {
            acceptOrder &&
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity
                activeOpacity={1}
                style={[generalStyles.loginContainer, { marginTop: 0, padding: 10 }]}
              >
                <Text style={generalStyles.loginText}>{'Start Journey'}</Text>
              </TouchableOpacity>
            </View>
          }

        </View>
        {/* delivery area */}
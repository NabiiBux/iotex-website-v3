import React from "react";
import {observer} from "mobx-react-lite";
import {Box, Flex,Text} from "@chakra-ui/react";
import {helper} from "@/utils/helper";
import BasicLayout from "../../Layouts/BasicLayout";
const Vita = () => {
	return (
		<>
			<BasicLayout name='vita'>
				{/*	Take your vita everyday*/}
				<Flex mt={40}>
					<Box>
						<Text>{import.meta.env.PROD?'prod':'dev'}</Text>
					</Box>
				</Flex>
			</BasicLayout>
		</>
	)
}

export default observer(Vita)

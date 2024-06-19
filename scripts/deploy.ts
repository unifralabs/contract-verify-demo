import { ethers } from "hardhat";

async function main() {
	const currentTimestampInSeconds = Math.round(Date.now() / 1000);
	const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
	const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

	const lockedAmount = ethers.parseEther("0.00000001");

	const Lock = await ethers.getContractFactory("Lock");
	const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

	console.log(
		`Lock with 0.00000001 ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`,
	);
	console.log(
		`Block explorer URL: https://testnet-scan.merlinchain.io/address/${lock.target}`,
	);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
